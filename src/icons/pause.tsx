import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const bar = (delay: number, inward: number) =>
	pose({ scaleY: [1, 0.6, 1], x: [0, inward, 0] }, { duration: 0.45, delay });

export default createAnimatedIcon({
	name: "pause",
	render: (part) => (
		<>
			<motion.rect {...part(bar(0.12, -1))} height="16" rx="1" style={edge(0.5, 1)} width="4" x="14" y="4" />
			<motion.rect {...part(bar(0, 1))} height="16" rx="1" style={edge(0.5, 1)} width="4" x="6" y="4" />
		</>
	),
});
