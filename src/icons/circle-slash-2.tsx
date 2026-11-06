import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const gate = pose(
	{ rotate: [0, -42, 6, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
);
const hit = pose(
	{ scale: [1, 1, 0.93, 1], rotate: [0, 0, 4.8, 0] },
	{ duration: 0.75, times: [0, 0.35, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "circle-slash-2",
	render: (part) => (
		<>
			<motion.g {...part(gate)} style={pivot(12, 12)}>
				<motion.path {...part(redraw(0.1, 0.35))} d="M22 2 2 22" />
			</motion.g>
			<motion.circle {...part(hit)} cx="12" cy="12" r="10" style={centered} />
		</>
	),
});
