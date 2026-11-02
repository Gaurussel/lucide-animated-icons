import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring } from "../helpers.ts";

const rock = pose(
	{ rotate: [0, -14, 12, 0, 0], y: [0, 0, 0, -4, 0] },
	{ duration: 0.75, times: [0, 0.14, 0.28, 0.42, 1], ease: ["easeInOut", "easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "egg",
	render: (part) => (
		<motion.path {...part(rock)} d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" style={pivot(12, 22)} />
	),
});
