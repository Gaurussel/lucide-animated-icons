import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -3, 0.3, 0], rotate: [0, -6, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "laptop-minimal",
	render: (part) => (
		<>
			<motion.rect {...part(screen)} height="12" rx="2" ry="2" style={edge(0.5, 1)} width="18" x="3" y="4" />
			<motion.line {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)} x1="2" x2="22" y1="20" y2="20" />
		</>
	),
});
