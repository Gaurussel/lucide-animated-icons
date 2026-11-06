import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, springy } from "../helpers.ts";

const plug = pose(
	{ x: [0, 1.5, -0.48, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "battery",
	render: (part) => (
		<>
			<motion.path {...part(plug)} d="M 22 14 L 22 10" />
			<motion.rect {...part(jelly(0.36, 0.72))} height="12" rx="2" style={centered} width="16" x="2" y="6" />
		</>
	),
});
