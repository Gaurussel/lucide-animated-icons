import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, snap, springy } from "../helpers.ts";

const slide = (axis: "x" | "y", by: number) =>
	pose({ [axis]: [0, by, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const fly = (axis: "x" | "y", by: number) =>
	pose(
		{ [axis]: [0, by, -by, 0], opacity: [1, 0, 0, 1] },
		{ duration: 0.7, times: [0, 0.3, 0.31, 1], ease: ["easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "panel-left-open",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(slide("x", 3))} d="M9 3v18" />
			<motion.path {...part(fly("x", 5))} d="m14 9 3 3-3 3" />
		</motion.g>
	),
});
