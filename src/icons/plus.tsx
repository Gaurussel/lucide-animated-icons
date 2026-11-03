import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber } from "../helpers.ts";

const nod = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.85, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "plus",
	render: (part) => (
		<motion.g {...part(nod)} style={centered}>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
		</motion.g>
	),
});
