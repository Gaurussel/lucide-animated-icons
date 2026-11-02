import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const coil = (delay: number) =>
	pose({ x: [0, -2, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const scribble = pose(
	{ x: [0, -2, 2, -1, 0], y: [0, -1, 1, 0, 0], rotate: [0, -12, 8, -6, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "notebook-pen",
	render: (part) => (
		<>
			<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
			<motion.path {...part(coil(0.05))} d="M2 6h4" />
			<motion.path {...part(coil(0.1))} d="M2 10h4" />
			<motion.path {...part(coil(0.15))} d="M2 14h4" />
			<motion.path {...part(coil(0.2))} d="M2 18h4" />
			<motion.path
				{...part(scribble)}
				d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
				style={pivot(12, 11.5)}
			/>
		</>
	),
});
