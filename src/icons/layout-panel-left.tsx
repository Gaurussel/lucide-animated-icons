import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const panel = pose({ x: [0, -4, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const tile = (delay: number) =>
	pose({ x: [0, 3, 0], scale: [1, 0.6, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "layout-panel-left",
	render: (part) => (
		<>
			<motion.rect {...part(panel)} height="18" rx="1" width="7" x="3" y="3" />
			<motion.rect {...part(tile(0.06))} height="7" rx="1" style={centered} width="7" x="14" y="3" />
			<motion.rect {...part(tile(0.14))} height="7" rx="1" style={centered} width="7" x="14" y="14" />
		</>
	),
});
