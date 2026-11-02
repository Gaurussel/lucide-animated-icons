import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const split = (x: number, y: number) =>
	pose(
		{ ...(x ? { x: [0, x, 0] } : {}), ...(y ? { y: [0, y, 0] } : {}) },
		{ duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] },
	);
const insert = pose(
	{ y: [0, 2.25, -3, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.38, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "between-vertical-end",
	render: (part) => (
		<>
			<motion.rect {...part(split(-2.5, 0))} height="13" rx="1" width="7" x="3" y="3" />
			<motion.path {...part(insert)} d="m9 22 3-3 3 3" />
			<motion.rect {...part(split(2.5, 0))} height="13" rx="1" width="7" x="14" y="3" />
		</>
	),
});
