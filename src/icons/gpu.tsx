import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const seat = pose({ x: [0, 4, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const fan = (delay: number) =>
	pose({ scale: [1, 0.4, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "gpu",
	render: (part) => (
		<>
			<path d="M2 21V3" />
			<motion.g {...part(seat)}>
				<path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" />
				<path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" />
				<motion.circle {...part(fan(0.05))} cx="16" cy="11" r="2" style={centered} />
				<motion.circle {...part(fan(0.15))} cx="8" cy="11" r="2" style={centered} />
			</motion.g>
		</>
	),
});
