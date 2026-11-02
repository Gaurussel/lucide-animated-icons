import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ rotate: [0, -10, 0], y: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const press = (delay: number) =>
	pose({ y: [0, 1.5, 0] }, { duration: 0.4, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "calculator",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 22)}>
			<rect height="20" rx="2" width="16" x="4" y="2" />
			<motion.line {...part(redraw(0.15, 0.5))} x1="8" x2="16" y1="6" y2="6" />
			<motion.line {...part(press(0.3))} x1="16" x2="16" y1="14" y2="18" />
			<motion.path {...part(press(0.05))} d="M16 10h.01" />
			<motion.path {...part(press(0.15))} d="M12 10h.01" />
			<motion.path {...part(press(0))} d="M8 10h.01" />
			<motion.path {...part(press(0.2))} d="M12 14h.01" />
			<motion.path {...part(press(0.1))} d="M8 14h.01" />
			<motion.path {...part(press(0.25))} d="M12 18h.01" />
			<motion.path {...part(press(0.12))} d="M8 18h.01" />
		</motion.g>
	),
});
