import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const slide = (x: number, y: number) =>
	pose(
		{ x: [0, -x, 2.5 * x, 0], y: [0, -y, 2.5 * y, 0] },
		{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "grid-3x3",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(slide(0, -1))} d="M3 9h18" />
			<motion.path {...part(slide(0, 1))} d="M3 15h18" />
			<motion.path {...part(slide(-1, 0))} d="M9 3v18" />
			<motion.path {...part(slide(1, 0))} d="M15 3v18" />
		</>
	),
});
