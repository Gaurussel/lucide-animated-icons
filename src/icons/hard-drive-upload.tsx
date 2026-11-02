import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const launch = pose(
	{ y: [0, -10, 0], opacity: [1, 0, 1] },
	{ duration: 0.65, times: [0, 0.28, 1], ease: [snap, springy] },
);
const blink = (delay: number) =>
	pose({ scale: [1, 2.2, 1] }, { duration: 0.4, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "hard-drive-upload",
	render: (part) => (
		<>
			<motion.g {...part(launch)}>
				<motion.path {...part(redraw(0.24, 0.33))} d="m16 6-4-4-4 4" />
				<motion.path {...part(redraw(0.19, 0.33))} d="M12 2v8" />
			</motion.g>
			<motion.g {...part(jelly(0.02, 0.65))} style={edge(0.5, 1)}>
				<rect height="8" rx="2" width="20" x="2" y="14" />
				<motion.path {...part(blink(0.05))} d="M6 18h.01" style={centered} />
				<motion.path {...part(blink(0.12))} d="M10 18h.01" style={centered} />
			</motion.g>
		</>
	),
});
