import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0], rotate: [0, -10, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-dashed",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<motion.path {...part(redraw(0.02, 0.4))} d="M12 2h1.5" />
			<motion.path {...part(redraw(0.045, 0.4))} d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
			<motion.path {...part(redraw(0.07, 0.4))} d="M20 8.5V10" />
			<motion.path {...part(redraw(0.095, 0.4))} d="M20 14v3h-2.5" />
			<motion.path {...part(redraw(0.12, 0.4))} d="M17.5 22H19a1 1 0 0 0 1-1" />
			<motion.path {...part(redraw(0.145, 0.4))} d="M12 22h1.5" />
			<motion.path {...part(redraw(0.17, 0.4))} d="M12 17h1.5" />
			<motion.path {...part(redraw(0.195, 0.4))} d="M8 22H6.5a1 1 0 0 1 0-5H8" />
			<motion.path {...part(redraw(0.22, 0.4))} d="M4 19.5V14" />
			<motion.path {...part(redraw(0.245, 0.4))} d="M4 10V8.5" />
			<motion.path {...part(redraw(0.27, 0.4))} d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
		</motion.g>
	),
});
