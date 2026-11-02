import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, ring, snap, springy } from "../helpers.ts";

const dropIn = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1], y: [0, -5, 0] },
		{ duration: 0.45, delay, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
	);
const push = (direction: number) =>
	pose(
		{ y: [0, 0, 1.5 * direction, 0] },
		{ duration: 0.65, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "table-cells-split",
	render: (part) => (
		<>
			<motion.path {...part(dropIn(0))} d="M12 15V9" />
			<motion.path {...part(push(1))} d="M3 15h18" />
			<motion.path {...part(push(-1))} d="M3 9h18" />
			<motion.rect {...part(jelly(0.3, 0.68))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
		</>
	),
});
