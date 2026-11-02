import type { AnimatedIconComponent } from "../src/types.ts";

const modules = import.meta.glob<{ default: AnimatedIconComponent }>(["../src/icons/*.tsx"]);

export const iconModules = Object.entries(modules)
	.map(([path, load]) => [path.slice("../src/icons/".length, -".tsx".length), load] as const)
	.sort(([a], [b]) => a.localeCompare(b));

export const toPascal = (name: string) =>
	name
		.split("-")
		.map((part) => part[0].toUpperCase() + part.slice(1))
		.join("");
