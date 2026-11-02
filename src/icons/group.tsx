import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const corner = (x: number, y: number) =>
	pose({ x: [0, x, x, 0], y: [0, y, y, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] });
const gather = (x: number, y: number) =>
	pose({ x: [0, 0, x, x, 0], y: [0, 0, y, y, 0] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.7, 1] });

export default createAnimatedIcon({
	name: "group",
	render: (part) => (
		<>
			<motion.path {...part(corner(1.5, 1.5))} d="M3 7V5c0-1.1.9-2 2-2h2" />
			<motion.path {...part(corner(-1.5, 1.5))} d="M17 3h2c1.1 0 2 .9 2 2v2" />
			<motion.path {...part(corner(-1.5, -1.5))} d="M21 17v2c0 1.1-.9 2-2 2h-2" />
			<motion.path {...part(corner(1.5, -1.5))} d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
			<motion.rect {...part(gather(1, 1))} height="5" rx="1" width="7" x="7" y="7" />
			<motion.rect {...part(gather(-1, -1))} height="5" rx="1" width="7" x="10" y="12" />
		</>
	),
});
