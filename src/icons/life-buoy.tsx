import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const spin = pose({ rotate: [0, -12, 360] }, { duration: 0.9, times: [0, 0.2, 1], reset: true });
const float = pose({ scale: [1, 1, 0.75, 1] }, { duration: 0.9, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "life-buoy",
	render: (part) => (
		<>
			<motion.g {...part(spin)} style={pivot(12, 12)}>
				<circle cx="12" cy="12" r="10" />
				<path d="m4.93 4.93 4.24 4.24" />
				<path d="m14.83 9.17 4.24-4.24" />
				<path d="m14.83 14.83 4.24 4.24" />
				<path d="m9.17 14.83-4.24 4.24" />
			</motion.g>
			<motion.circle {...part(float)} cx="12" cy="12" r="4" style={centered} />
		</>
	),
});
