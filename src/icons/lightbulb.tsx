import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const bulb = pose(
	{ opacity: [1, 0.3, 1, 0.55, 1], scale: [1, 0.96, 1.06, 1, 1] },
	{ duration: 0.85, times: [0, 0.2, 0.4, 0.55, 1] },
);
const cap = (delay: number) => pose({ scaleX: [1, 0.75, 1] }, { duration: 0.35, delay, times: [0, 0.5, 1] });

export default createAnimatedIcon({
	name: "lightbulb",
	render: (part) => (
		<>
			<motion.path
				{...part(bulb)}
				d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
				style={pivot(12, 8)}
			/>
			<motion.path {...part(cap(0))} d="M9 18h6" style={centered} />
			<motion.path {...part(cap(0.1))} d="M10 22h4" style={centered} />
		</>
	),
});
