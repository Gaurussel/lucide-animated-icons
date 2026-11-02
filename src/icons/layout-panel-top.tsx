import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const panel = pose({ scaleY: [1, 0.55, 1] }, { duration: 0.6, times: [0, 0.45, 1] });
const tile = (delay: number) => pose({ scaleY: [1, 1.3, 1] }, { duration: 0.6, delay, times: [0, 0.45, 1] });

export default createAnimatedIcon({
	name: "layout-panel-top",
	render: (part) => (
		<>
			<motion.rect {...part(panel)} height="7" rx="1" style={edge(0.5, 0)} width="18" x="3" y="3" />
			<motion.rect {...part(tile(0.05))} height="7" rx="1" style={edge(0.5, 1)} width="7" x="3" y="14" />
			<motion.rect {...part(tile(0.15))} height="7" rx="1" style={edge(0.5, 1)} width="7" x="14" y="14" />
		</>
	),
});
