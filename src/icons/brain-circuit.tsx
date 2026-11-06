import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const think = pose(
	{ rotate: [0, -7.2, 0], x: [0, -0.9, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);
const spark = (delay: number) =>
	pose(
		{ scale: [1, 1, 2.2, 1] },
		{ duration: 0.55, delay, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "brain-circuit",
	render: (part) => (
		<>
			<motion.g {...part(think)} style={pivot(12, 20)}>
				<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
				<path d="M9 13a4.5 4.5 0 0 0 3-4" />
				<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
				<path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
				<path d="M6 18a4 4 0 0 1-1.967-.516" />
			</motion.g>
			<motion.path {...part(redraw(0, 0.4))} d="M12 13h4" />
			<motion.path {...part(redraw(0.1, 0.45))} d="M12 18h6a2 2 0 0 1 2 2v1" />
			<motion.path {...part(redraw(0.05, 0.4))} d="M12 8h8" />
			<motion.path {...part(redraw(0.12, 0.4))} d="M16 8V5a2 2 0 0 1 2-2" />
			<motion.circle {...part(spark(0.05))} cx="16" cy="13" r=".5" style={centered} />
			<motion.circle {...part(spark(0.15))} cx="18" cy="3" r=".5" style={centered} />
			<motion.circle {...part(spark(0.2))} cx="20" cy="21" r=".5" style={centered} />
			<motion.circle {...part(spark(0.1))} cx="20" cy="8" r=".5" style={centered} />
		</>
	),
});
