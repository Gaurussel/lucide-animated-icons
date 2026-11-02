import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -7, 0, 0], scale: [1, 1, 2.2, 1] },
	{ duration: 0.72, times: [0, 0.22, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "square-dot",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.38, 0.72))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.circle {...part(drop)} cx="12" cy="12" r="1" style={centered} />
		</>
	),
});
