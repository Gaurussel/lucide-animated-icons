import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const flutter = pose({ rotate: [0, 18, 0] }, { duration: 0.7, times: [0, 0.15, 1], ease: [snap, ring] });
const shine = pose({ scale: [1, 1.2, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "award",
	render: (part) => (
		<>
			<motion.path
				{...part(flutter)}
				d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
				style={pivot(12, 13)}
			/>
			<motion.circle {...part(shine)} cx="12" cy="8" r="6" style={centered} />
		</>
	),
});
