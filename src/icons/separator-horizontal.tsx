import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const push = (direction: number) =>
	pose(
		{ y: [0, 3 * direction, -4 * direction, 0] },
		{ duration: 0.7, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
	);
const spread = pose(
	{ scaleX: [1, 1, 0.76, 1] },
	{ duration: 0.7, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "separator-horizontal",
	render: (part) => (
		<>
			<motion.path {...part(push(1))} d="m8 8 4-4 4 4" />
			<motion.path {...part(spread)} d="M3 12h18" style={centered} />
			<motion.path {...part(push(-1))} d="m16 16-4 4-4-4" />
		</>
	),
});
