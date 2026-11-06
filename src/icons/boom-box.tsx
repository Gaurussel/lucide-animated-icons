import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, rubber, snap, springy } from "../helpers.ts";

const bounce = pose(
	{ y: [0, -1.8, 0], rotate: [0, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const bass = (delay: number) =>
	pose({ scale: [1, 1.3, 1] }, { duration: 0.6, delay, times: [0, 0.2, 1], ease: [snap, rubber] });
const knobs = pose({ y: [0, -1.2, 0] }, { duration: 0.6, delay: 0.08, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "boom-box",
	render: (part) => (
		<motion.g {...part(bounce)} style={edge(0.5, 1)}>
			<path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
			<motion.g {...part(knobs)}>
				<path d="M8 8v1" />
				<path d="M12 8v1" />
				<path d="M16 8v1" />
			</motion.g>
			<rect height="12" rx="2" width="20" x="2" y="9" />
			<motion.circle {...part(bass(0))} cx="8" cy="15" r="2" style={centered} />
			<motion.circle {...part(bass(0.1))} cx="16" cy="15" r="2" style={centered} />
		</motion.g>
	),
});
