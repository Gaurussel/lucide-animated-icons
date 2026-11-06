import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, 2.43, 0] },
	{ duration: 0.72, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const swap = (direction: number) =>
	pose(
		{ x: [0, 6 * direction, 0], y: [0, 6 * direction, 0] },
		{ duration: 0.62, times: [0, 0.4, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "square-percent",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.45, 0.72))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.path {...part(turn)} d="m15 9-6 6" style={centered} />
			<motion.path {...part(swap(1))} d="M9 9h.01" />
			<motion.path {...part(swap(-1))} d="M15 15h.01" />
		</>
	),
});
