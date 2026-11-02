import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const slot = pose({ x: [0, -1.5, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.18, 0.45, 0.7, 1] });
const fan = (delay: number) =>
	pose({ scale: [1, 1, 0.5, 1, 0.5, 1] }, { duration: 0.8, delay, times: [0, 0.4, 0.55, 0.7, 0.85, 1] });

export default createAnimatedIcon({
	name: "gpu",
	render: (part) => (
		<>
			<path d="M2 21V3" />
			<motion.g {...part(slot)}>
				<path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" />
				<path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" />
				<motion.circle {...part(fan(0.05))} cx="16" cy="11" r="2" style={centered} />
				<motion.circle {...part(fan(0))} cx="8" cy="11" r="2" style={centered} />
			</motion.g>
		</>
	),
});
