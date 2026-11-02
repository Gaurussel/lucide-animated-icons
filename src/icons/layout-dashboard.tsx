import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const tile = (delay: number) =>
	pose({ y: [0, -4, 0], scale: [1, 0.75, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "layout-dashboard",
	render: (part) => (
		<>
			<motion.rect {...part(tile(0))} height="9" rx="1" style={centered} width="7" x="3" y="3" />
			<motion.rect {...part(tile(0.06))} height="5" rx="1" style={centered} width="7" x="14" y="3" />
			<motion.rect {...part(tile(0.12))} height="9" rx="1" style={centered} width="7" x="14" y="12" />
			<motion.rect {...part(tile(0.18))} height="5" rx="1" style={centered} width="7" x="3" y="16" />
		</>
	),
});
