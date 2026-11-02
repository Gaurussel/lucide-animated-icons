import type { AnimatedIconName } from "../src/dynamic.tsx";

export const iconNames = Object.keys(import.meta.glob("../src/icons/*.tsx"))
	.map((path) => path.slice("../src/icons/".length, -".tsx".length))
	.sort() as AnimatedIconName[];
