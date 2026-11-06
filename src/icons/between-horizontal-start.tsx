import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const split = (x: number, y: number) =>
	pose(
		{ ...(x ? { x: [0, x, 0] } : {}), ...(y ? { y: [0, y, 0] } : {}) },
		{ duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] },
	);
const insert = pose(
	{ x: [0, -1.35, 1.8, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.38, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "between-horizontal-start",
	render: (part) => (
		<>
			<motion.rect {...part(split(0, -2.5))} height="7" rx="1" width="13" x="8" y="3" />
			<motion.path {...part(insert)} d="m2 9 3 3-3 3" />
			<motion.rect {...part(split(0, 2.5))} height="7" rx="1" width="13" x="8" y="14" />
		</>
	),
});
