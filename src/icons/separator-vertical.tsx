import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const push = (direction: number) =>
	pose(
		{ x: [0, 3 * direction, -4 * direction, 0] },
		{ duration: 0.7, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
	);
const spread = pose(
	{ scaleY: [1, 1, 0.6, 1] },
	{ duration: 0.7, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "separator-vertical",
	render: (part) => (
		<>
			<motion.path {...part(push(1))} d="m8 8-4 4 4 4" />
			<motion.path {...part(spread)} d="M12 3v18" style={centered} />
			<motion.path {...part(push(-1))} d="m16 16 4-4-4-4" />
		</>
	),
});
