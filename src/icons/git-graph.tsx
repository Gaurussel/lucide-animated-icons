import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const node = (delay: number) =>
	pose({ scale: [1, 1.4, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const swing = pose(
	{ rotate: [0, 0, -25, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.5, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "git-graph",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.45))} d="M12 3v18" />
			<motion.circle {...part(node(0.05))} cx="5" cy="18" r="3" style={centered} />
			<motion.path {...part(redraw(0.1, 0.35))} d="M5 9v6" />
			<motion.circle {...part(node(0.25))} cx="5" cy="6" r="3" style={centered} />
			<motion.g {...part(swing)} style={pivot(16, 15.7)}>
				<motion.path {...part(redraw(0.15, 0.35))} d="M16 15.7A9 9 0 0 0 19 9" />
				<motion.circle {...part(node(0.3))} cx="19" cy="6" r="3" style={centered} />
			</motion.g>
		</>
	),
});
