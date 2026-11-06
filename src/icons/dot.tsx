import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const bounce = pose(
	{ y: [0, 0.6, -4.2, 0, -1.2, 0], scale: [1, 1.18, 0.94, 1.48, 1, 1] },
	{
		duration: 0.75,
		times: [0, 0.1, 0.3, 0.48, 0.6, 1],
		ease: ["easeInOut", "easeOut", "easeIn", "easeOut", springy],
	},
);

export default createAnimatedIcon({
	name: "dot",
	render: (part) => <motion.circle {...part(bounce)} cx="12.1" cy="12.1" r="1" style={centered} />,
});
