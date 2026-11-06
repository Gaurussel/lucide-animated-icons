import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const slide = (k: number) =>
	pose(
		{ x: [0, -k, 4 * k, 0], y: [0, -k, 4 * k, 0] },
		{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
	);
const twang = pose(
	{ rotate: [0, 0, -10.8, 0] },
	{ duration: 0.75, times: [0, 0.33, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "percent",
	render: (part) => (
		<>
			<motion.line {...part(twang)} style={pivot(12, 12)} x1="19" x2="5" y1="5" y2="19" />
			<motion.circle {...part(slide(1))} cx="6.5" cy="6.5" r="2.5" />
			<motion.circle {...part(slide(-1))} cx="17.5" cy="17.5" r="2.5" />
		</>
	),
});
