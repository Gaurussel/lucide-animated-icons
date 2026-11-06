import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, ring, snap, springy } from "../helpers.ts";

const flinch = pose(
	{ rotate: [0, 0, -6, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);
const fall = (delay: number) =>
	pose(
		{ y: [0, 0, 1.8, 0], opacity: [1, 1, 0.3, 1] },
		{ duration: 0.65, delay, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", "easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "captions-off",
	render: (part) => (
		<>
			<motion.g {...part(flinch)} style={edge(0.5, 1)}>
				<path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
				<path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
				<motion.path {...part(fall(0))} d="M7 11h4" />
				<motion.path {...part(fall(0.05))} d="M17 11h-.5" />
				<motion.path {...part(fall(0.1))} d="M7 15h2.5" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.4))} d="m2 2 20 20" />
		</>
	),
});
