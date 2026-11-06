import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const panel = pose({ y: [0, -2.4, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const tile = (delay: number) =>
	pose({ y: [0, 1.8, 0], scale: [1, 0.76, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "layout-panel-top",
	render: (part) => (
		<>
			<motion.rect {...part(panel)} height="7" rx="1" width="18" x="3" y="3" />
			<motion.rect {...part(tile(0.06))} height="7" rx="1" style={centered} width="7" x="3" y="14" />
			<motion.rect {...part(tile(0.14))} height="7" rx="1" style={centered} width="7" x="14" y="14" />
		</>
	),
});
