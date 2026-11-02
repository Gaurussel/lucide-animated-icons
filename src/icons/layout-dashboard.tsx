import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const tile = (scale: number, delay: number) =>
	pose({ scaleY: [1, scale, 1] }, { duration: 0.45, delay, times: [0, 0.5, 1] });

export default createAnimatedIcon({
	name: "layout-dashboard",
	render: (part) => (
		<>
			<motion.rect {...part(tile(0.4, 0))} height="9" rx="1" style={edge(0.5, 0)} width="7" x="3" y="3" />
			<motion.rect {...part(tile(1.7, 0))} height="5" rx="1" style={edge(0.5, 0)} width="7" x="14" y="3" />
			<motion.rect {...part(tile(2, 0.3))} height="5" rx="1" style={edge(0.5, 1)} width="7" x="3" y="16" />
			<motion.rect {...part(tile(0.4, 0.3))} height="9" rx="1" style={edge(0.5, 1)} width="7" x="14" y="12" />
		</>
	),
});
