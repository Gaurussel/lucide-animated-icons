import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const binder = (delay: number) =>
	pose(
		{ y: [0, 0, -3, 0] },
		{ duration: 0.7, times: [0, delay, delay + 0.12, 1], ease: ["easeInOut", snap, springy] },
	);
const sheet = pose(
	{ y: [0, 0, -3, 0], rotate: [0, 0, -8, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.28, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "notepad-text",
	render: (part) => (
		<>
			<motion.path {...part(binder(0))} d="M8 2v4" />
			<motion.path {...part(binder(0.05))} d="M12 2v4" />
			<motion.path {...part(binder(0.1))} d="M16 2v4" />
			<motion.g {...part(sheet)} style={edge(0, 0)}>
				<rect height="18" rx="2" width="16" x="4" y="4" />
				<motion.path {...part(redraw(0.3, 0.3))} d="M8 10h6" />
				<motion.path {...part(redraw(0.38, 0.3))} d="M8 14h8" />
				<motion.path {...part(redraw(0.46, 0.25))} d="M8 18h5" />
			</motion.g>
		</>
	),
});
