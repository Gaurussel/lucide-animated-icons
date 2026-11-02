import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const tilt = pose({ rotate: [0, -8, 6, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] });
const base = pose({ scaleX: [1, 0.8, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 1] });
const glow = pose({ opacity: [1, 1, 0.4, 1] }, { duration: 0.85, times: [0, 0.5, 0.7, 1] });

export default createAnimatedIcon({
	name: "lamp-floor",
	render: (part) => (
		<>
			<path d="M12 10v12" />
			<motion.path {...part(base)} d="M9 22h6" style={centered} />
			<motion.g {...part(tilt)} style={pivot(12, 9)}>
				<motion.path
					{...part(glow)}
					d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"
				/>
			</motion.g>
		</>
	),
});
