import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, springy } from "../helpers.ts";

const fly = pose(
	{ y: [0, -2, 10, -8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.68, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "square-arrow-down",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.4, 0.68))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(fly)}>
				<path d="M12 8v8" />
				<path d="m8 12 4 4 4-4" />
			</motion.g>
		</>
	),
});
