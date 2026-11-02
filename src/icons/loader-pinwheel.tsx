import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const spin = pose({ rotate: [0, -14, 360] }, { duration: 0.9, times: [0, 0.2, 1], reset: true });
const ring = pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.5, 1] });

export default createAnimatedIcon({
	name: "loader-pinwheel",
	render: (part) => (
		<>
			<motion.g {...part(spin)} style={pivot(12, 12)}>
				<path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
				<path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
				<path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
			</motion.g>
			<motion.circle {...part(ring)} cx="12" cy="12" r="10" style={centered} />
		</>
	),
});
