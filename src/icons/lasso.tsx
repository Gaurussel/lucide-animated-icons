import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const swirl = pose({ rotate: [0, -10, 0], pathLength: [1, 0.25, 1] }, { duration: 0.85, times: [0, 0.4, 1] });
const knot = pose({ scale: [1, 1, 0.6, 1] }, { duration: 0.85, times: [0, 0.3, 0.55, 1] });
const tail = pose({ y: [0, 0, 1.5, 0] }, { duration: 0.85, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "lasso",
	render: (part) => (
		<>
			<motion.path {...part(tail)} d="M7 22a5 5 0 0 1-2-4" />
			<motion.path
				{...part(swirl)}
				d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
				style={pivot(12, 10)}
			/>
			<motion.path {...part(knot)} d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" style={centered} />
		</>
	),
});
