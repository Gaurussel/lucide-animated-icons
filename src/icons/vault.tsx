import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const dial = pose(
	{ rotate: [0, -40, 360], scale: [1, 1.3, 1] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const bolt = (delay: number) =>
	pose({ scale: [1, 2, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "vault",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.circle {...part(bolt(0.1))} cx="7.5" cy="7.5" fill="currentColor" r=".5" style={centered} />
			<motion.circle {...part(bolt(0.16))} cx="16.5" cy="7.5" fill="currentColor" r=".5" style={centered} />
			<motion.circle {...part(bolt(0.22))} cx="7.5" cy="16.5" fill="currentColor" r=".5" style={centered} />
			<motion.circle {...part(bolt(0.28))} cx="16.5" cy="16.5" fill="currentColor" r=".5" style={centered} />
			<motion.g {...part(dial)} style={pivot(12, 12)}>
				<path d="m7.9 7.9 2.7 2.7" />
				<path d="m13.4 10.6 2.7-2.7" />
				<path d="m7.9 16.1 2.7-2.7" />
				<path d="m13.4 13.4 2.7 2.7" />
				<circle cx="12" cy="12" r="2" />
			</motion.g>
		</>
	),
});
