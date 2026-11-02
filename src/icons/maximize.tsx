import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const timing = { duration: 0.65, times: [0, 0.2, 0.55, 1] };
const corner = (x: number, y: number) => pose({ x: [0, -x, x * 1.5, 0], y: [0, -y, y * 1.5, 0] }, timing);

export default createAnimatedIcon({
	name: "maximize",
	render: (part) => (
		<>
			<motion.path {...part(corner(-1, -1))} d="M8 3H5a2 2 0 0 0-2 2v3" />
			<motion.path {...part(corner(1, -1))} d="M21 8V5a2 2 0 0 0-2-2h-3" />
			<motion.path {...part(corner(-1, 1))} d="M3 16v3a2 2 0 0 0 2 2h3" />
			<motion.path {...part(corner(1, 1))} d="M16 21h3a2 2 0 0 0 2-2v-3" />
		</>
	),
});
