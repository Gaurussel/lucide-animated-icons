import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, springy } from "../helpers.ts";

const fly = pose(
	{ y: [0, 2, -9, 7, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.68, times: [0, 0.15, 0.33, 0.34, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "square-chevron-up",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.38, 0.68))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.path {...part(fly)} d="m8 14 4-4 4 4" />
		</>
	),
});
