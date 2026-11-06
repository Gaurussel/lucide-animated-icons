import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -3, 0.3, 0], rotate: [0, -4.8, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const strike = pose({ scale: [1, 0.89, 1] }, { duration: 0.65, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "monitor-x",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<rect height="14" rx="2" width="20" x="2" y="3" />
				<motion.g {...part(strike)} style={centered}>
					<motion.path {...part(redraw(0.05, 0.35))} d="m14.5 12.5-5-5" />
					<motion.path {...part(redraw(0.22, 0.35))} d="m9.5 12.5 5-5" />
				</motion.g>
			</motion.g>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="M12 17v4" />
				<path d="M8 21h8" />
			</motion.g>
		</>
	),
});
