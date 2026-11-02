import { readFileSync } from "node:fs";
import { chromium } from "playwright";

const DEMO = "?size=24";
const baseUrl = process.env.DEMO_URL ?? "http://127.0.0.1:5173";

const readNames = (arg: string | undefined) => {
	if (!arg) return null;
	const source = arg.endsWith(".txt") ? readFileSync(arg, "utf8") : arg;
	return source.split(/[\s,]+/).filter(Boolean);
};

const measure = async (only: string[] | null) => {
	const browser = await chromium.launch();
	try {
		const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
		page.setDefaultTimeout(300000);
		await page.goto(`${baseUrl}/${DEMO}`, { waitUntil: "domcontentloaded" });
		await page.waitForSelector("button.cell");
		return await page.evaluate(async (only) => {
			const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
			const size = 96;
			const canvas = document.createElement("canvas");
			canvas.width = size;
			canvas.height = size;
			const context = canvas.getContext("2d", { willReadFrequently: true });
			if (!context) throw new Error("no 2d context");

			const raster = async (svg: SVGSVGElement) => {
				const clone = svg.cloneNode(true) as SVGSVGElement;
				clone.setAttribute("width", String(size));
				clone.setAttribute("height", String(size));
				clone.setAttribute("color", "#000");
				clone.removeAttribute("class");
				const source = svg.querySelectorAll("*");
				clone.querySelectorAll<SVGElement>("*").forEach((element, index) => {
					const style = getComputedStyle(source[index]);
					element.style.transform = style.transform === "none" ? "" : style.transform;
					element.style.opacity = style.opacity;
					element.style.strokeDasharray = style.strokeDasharray;
					element.style.strokeDashoffset = style.strokeDashoffset;
				});
				const image = new Image();
				image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(clone))}`;
				await image.decode();
				context.clearRect(0, 0, size, size);
				context.drawImage(image, 0, 0, size, size);
				const pixels = context.getImageData(0, 0, size, size).data;
				return Uint8Array.from({ length: size * size }, (_, i) => pixels[i * 4 + 3]);
			};

			const scores: Record<string, number> = {};
			for (const button of document.querySelectorAll<HTMLButtonElement>("button.cell")) {
				const name = button.dataset.icon;
				if (!name || (only && !only.includes(name))) continue;
				const svgOf = () => button.querySelector("svg") as SVGSVGElement;
				const isLive = () => svgOf().dataset.animatedIcon === "live";

				button.focus();
				for (let i = 0; i < 800 && !isLive(); i++) await sleep(50);
				await sleep(700);
				button.blur();
				await sleep(500);
				if (!isLive()) {
					scores[name] = -1;
					continue;
				}

				const rest = await raster(svgOf());
				const ink = rest.reduce((count, alpha) => count + (alpha > 64 ? 1 : 0), 0);
				button.focus();
				let best = 0;
				const start = performance.now();
				while (performance.now() - start < 1000) {
					const frame = await raster(svgOf());
					let changed = 0;
					for (let i = 0; i < frame.length; i++) if (Math.abs(frame[i] - rest[i]) > 96) changed++;
					best = Math.max(best, changed / Math.max(ink, 1));
					await sleep(25);
				}
				button.blur();
				scores[name] = Math.round(best * 1000) / 1000;
			}
			return scores;
		}, only);
	} finally {
		await browser.close();
	}
};

const scores = await measure(readNames(process.argv[2]));
for (const [name, score] of Object.entries(scores).sort((a, b) => a[1] - b[1])) console.log(name, score);
