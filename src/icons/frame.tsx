import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const open = (x: number, y: number) =>
	pose(
		{ x: [0, -x, 2.5 * x, 0], y: [0, -y, 2.5 * y, 0] },
		{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "frame",
	render: (part) => (
		<>
			<motion.line {...part(open(0, -1))} x1="22" x2="2" y1="6" y2="6" />
			<motion.line {...part(open(0, 1))} x1="22" x2="2" y1="18" y2="18" />
			<motion.line {...part(open(-1, 0))} x1="6" x2="6" y1="2" y2="22" />
			<motion.line {...part(open(1, 0))} x1="18" x2="18" y1="2" y2="22" />
		</>
	),
});
