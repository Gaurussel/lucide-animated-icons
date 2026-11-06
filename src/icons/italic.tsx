import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const lean = pose({ rotate: [0, 10.8, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const slide = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "italic",
	render: (part) => (
		<>
			<motion.line {...part(slide(1))} x1="19" x2="10" y1="4" y2="4" />
			<motion.line {...part(slide(-1))} x1="14" x2="5" y1="20" y2="20" />
			<motion.line {...part(lean)} style={pivot(12, 12)} x1="15" x2="9" y1="4" y2="20" />
		</>
	),
});
