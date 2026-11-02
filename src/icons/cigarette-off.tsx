import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const puff = (delay: number) =>
	pose(
		{ y: [0, -5, 4, 0], opacity: [1, 0, 0, 1] },
		{ duration: 0.7, delay, times: [0, 0.35, 0.36, 1], ease: ["easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "cigarette-off",
	render: (part) => (
		<>
			<path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
			<motion.path {...part(puff(0))} d="M18 8c0-2.5-2-2.5-2-5" />
			<motion.path {...part(redraw(0.15, 0.45))} d="m2 2 20 20" />
			<path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
			<motion.path {...part(puff(0.08))} d="M22 8c0-2.5-2-2.5-2-5" />
			<path d="M7 12v4" />
		</>
	),
});
