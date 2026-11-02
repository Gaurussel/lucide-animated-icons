import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const tumble = pose(
	{ y: [0, 2, -4, 0], rotate: [0, -15, 270, 360] },
	{ duration: 0.75, times: [0, 0.15, 0.45, 1], ease: ["easeInOut", snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "square",
	render: (part) => <motion.rect {...part(tumble)} height="18" rx="2" style={centered} width="18" x="3" y="3" />,
});
