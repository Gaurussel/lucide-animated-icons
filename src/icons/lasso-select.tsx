import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const swirl = (delay: number) => pose({ pathLength: [1, 0.3, 1] }, { duration: 0.6, delay, times: [0, 0.4, 1] });
const knot = pose({ scale: [1, 1, 0.6, 1] }, { duration: 0.85, times: [0, 0.3, 0.55, 1] });
const cursor = pose(
	{ x: [0, -1, 1.5, 0], y: [0, -1, 1.5, 0], scale: [1, 1, 0.85, 1] },
	{ duration: 0.85, times: [0, 0.25, 0.6, 1] },
);

export default createAnimatedIcon({
	name: "lasso-select",
	render: (part) => (
		<>
			<path d="M7 22a5 5 0 0 1-2-4" />
			<motion.path {...part(swirl(0.1))} d="M7 16.93c.96.43 1.96.74 2.99.91" />
			<motion.path
				{...part(swirl(0))}
				d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"
			/>
			<motion.path {...part(knot)} d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" style={centered} />
			<motion.path
				{...part(cursor)}
				d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
				style={centered}
			/>
		</>
	),
});
