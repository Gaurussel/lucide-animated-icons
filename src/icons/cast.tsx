import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, redraw, snap, springy } from "../helpers.ts";

const screen = pose({ x: [0, 1.2, 0], y: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const source = pose({ scale: [1, 1.9, 1] }, { duration: 0.5, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cast",
	render: (part) => (
		<>
			<motion.path
				{...part(screen)}
				d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
				style={edge(0, 1)}
			/>
			<motion.path {...part(redraw(0.25, 0.4))} d="M2 12a9 9 0 0 1 8 8" />
			<motion.path {...part(redraw(0.12, 0.4))} d="M2 16a5 5 0 0 1 4 4" />
			<motion.line {...part(source)} style={centered} x1="2" x2="2.01" y1="20" y2="20" />
		</>
	),
});
