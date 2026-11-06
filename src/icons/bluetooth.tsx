import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, rubber, snap } from "../helpers.ts";

const ding = pose(
	{ rotate: [0, 0, -9.6, 0] },
	{ duration: 0.72, times: [0, 0.45, 0.55, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "bluetooth",
	render: (part) => (
		<motion.g {...part(ding)} style={centered}>
			<motion.path {...part(redraw(0, 0.45))} d="m7 7 10 10-5 5V2l5 5L7 17" />
		</motion.g>
	),
});
