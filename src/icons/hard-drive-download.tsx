import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -1.8, 2.4, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.38, 1], ease: [snap, "easeIn", springy] },
);
const blink = (delay: number) =>
	pose({ scale: [1, 1.72, 1] }, { duration: 0.4, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "hard-drive-download",
	render: (part) => (
		<>
			<motion.g {...part(drop)}>
				<path d="M12 2v8" />
				<path d="m16 6-4 4-4-4" />
			</motion.g>
			<motion.g {...part(jelly(0.32, 0.65))} style={edge(0.5, 1)}>
				<rect height="8" rx="2" width="20" x="2" y="14" />
				<motion.path {...part(blink(0.25))} d="M6 18h.01" style={centered} />
				<motion.path {...part(blink(0.32))} d="M10 18h.01" style={centered} />
			</motion.g>
		</>
	),
});
