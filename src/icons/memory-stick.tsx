import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const plug = pose(
	{ y: [0, -4, 2, 0], rotate: [0, -6, 0, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.36, 1], ease: [snap, "easeIn", springy] },
);
const spark = (delay: number) =>
	pose({ y: [0, 0, 2, 0] }, { duration: 0.5, delay, times: [0, 0.01, 0.2, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "memory-stick",
	render: (part) => (
		<motion.g {...part(plug)} style={edge(0.5, 1)}>
			<path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" />
			<path d="M2 15h20" />
			<motion.path {...part(spark(0.24))} d="M6 19v-3" />
			<motion.path {...part(spark(0.29))} d="M10 19v-3" />
			<motion.path {...part(spark(0.34))} d="M14 19v-3" />
			<motion.path {...part(spark(0.39))} d="M18 19v-3" />
			<motion.path {...part(redraw(0.32, 0.3))} d="M8 11V9" />
			<motion.path {...part(redraw(0.38, 0.3))} d="M12 11V9" />
			<motion.path {...part(redraw(0.44, 0.3))} d="M16 11V9" />
		</motion.g>
	),
});
