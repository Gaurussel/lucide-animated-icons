import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const ring = (delay: number) => pose({ x: [0, 3, 0] }, { duration: 0.35, delay });
const write = pose(
	{ x: [0, -5, -1, -5.5, 0], y: [0, 5, 1, 5.5, 0] },
	{ duration: 0.8, delay: 0.15, times: [0, 0.25, 0.5, 0.75, 1] },
);

export default createAnimatedIcon({
	name: "notebook-pen",
	render: (part) => (
		<>
			<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
			<motion.path {...part(ring(0))} d="M2 6h4" />
			<motion.path {...part(ring(0.06))} d="M2 10h4" />
			<motion.path {...part(ring(0.12))} d="M2 14h4" />
			<motion.path {...part(ring(0.18))} d="M2 18h4" />
			<motion.path
				{...part(write)}
				d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
			/>
		</>
	),
});
