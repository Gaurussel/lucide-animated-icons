import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, springy } from "../helpers.ts";

const fly = pose(
	{ x: [0, 1.2, -4.2, 3.6, 0], y: [0, -1.2, 4.2, -3.6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.68, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "square-arrow-down-left",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.4, 0.68))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(fly)}>
				<path d="m16 8-8 8" />
				<path d="M16 16H8V8" />
			</motion.g>
		</>
	),
});
