import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, snap, springy } from "../helpers.ts";

const twist = pose(
	{ scale: [1, 0.7, 1.09, 1], rotate: [0, 0, -9.9, 0] },
	{ duration: 0.68, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "square-square",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.4, 0.68))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.rect {...part(twist)} height="8" rx="1" style={centered} width="8" x="8" y="8" />
		</>
	),
});
