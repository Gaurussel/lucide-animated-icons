import { icons } from "lucide-react";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { type AnimatedIconName, getLazyAnimatedIcon } from "../src/dynamic.tsx";
import { type AnimatedIconComponent, AnimatedIconTriggerContext, useAnimatedIconTrigger } from "../src/index.ts";
import { iconNames } from "./names.ts";

const toPascal = (name: string) =>
	name
		.split("-")
		.map((part) => part[0].toUpperCase() + part.slice(1))
		.join("");

const size = Number(new URLSearchParams(location.search).get("size") ?? 24);

const Cell = ({ name }: { name: AnimatedIconName }) => {
	const { hub, handlers } = useAnimatedIconTrigger<HTMLButtonElement>({ focus: "always" });
	const Static = icons[toPascal(name) as keyof typeof icons] as AnimatedIconComponent;
	const Animated = getLazyAnimatedIcon(name, Static);
	return (
		<AnimatedIconTriggerContext.Provider value={hub}>
			<button className="cell" data-icon={name} type="button" {...handlers}>
				<Animated height={size} width={size} />
				<Static height={size} width={size} />
				<span className="name">{name}</span>
			</button>
		</AnimatedIconTriggerContext.Provider>
	);
};

const Gallery = () => {
	const [query, setQuery] = useState("");
	const shown = iconNames.filter((name) => name.includes(query.trim().toLowerCase()));
	return (
		<main>
			<header>
				<input onChange={(event) => setQuery(event.target.value)} placeholder="Search icons" value={query} />
				<span>
					{shown.length} icons · hover or Tab to a cell · static icon on the right · <a href="?size=16">16</a>{" "}
					/ <a href="?size=24">24</a> px
				</span>
			</header>
			<div className="grid">
				{shown.map((name) => (
					<Cell key={name} name={name} />
				))}
			</div>
		</main>
	);
};

const root = document.getElementById("root");
if (root)
	createRoot(root).render(
		<StrictMode>
			<Gallery />
		</StrictMode>,
	);
