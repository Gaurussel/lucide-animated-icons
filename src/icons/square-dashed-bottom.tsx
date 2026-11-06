import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, springy } from "../helpers.ts";

const shake = pose(
	{ y: [0, -1.2, 0.6, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", "easeIn", springy] },
);
const spill = (delay: number) =>
	pose(
		{ y: [0, 0, 2.4, 0] },
		{ duration: 0.55, delay, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", "easeIn", ring] },
	);

export default createAnimatedIcon({
	name: "square-dashed-bottom",
	render: (part) => (
		<>
			<motion.path {...part(shake)} d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
			<motion.path {...part(spill(0.08))} d="M9 21h1" />
			<motion.path {...part(spill(0.16))} d="M14 21h1" />
		</>
	),
});
