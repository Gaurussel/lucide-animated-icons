import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const puff = (delay: number) =>
	pose(
		{ y: [0, -3, 2.4, 0], opacity: [1, 0, 0, 1] },
		{ duration: 0.7, delay, times: [0, 0.35, 0.36, 1], ease: ["easeIn", "easeInOut", springy] },
	);
const drag = pose({ x: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "cigarette",
	render: (part) => (
		<>
			<motion.g {...part(drag)}>
				<path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
				<path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
				<path d="M7 12v4" />
			</motion.g>
			<motion.path {...part(puff(0))} d="M18 8c0-2.5-2-2.5-2-5" />
			<motion.path {...part(puff(0.08))} d="M22 8c0-2.5-2-2.5-2-5" />
		</>
	),
});
