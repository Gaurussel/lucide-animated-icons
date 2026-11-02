import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const search = pose(
	{ x: [0, 0, 4, 0], y: [0, -7, -6, 0], scale: [1, 1.8, 1.8, 1] },
	{ duration: 0.72, times: [0, 0.25, 0.45, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "signal-zero",
	render: (part) => <motion.path {...part(search)} d="M2 20h.01" style={centered} />,
});
