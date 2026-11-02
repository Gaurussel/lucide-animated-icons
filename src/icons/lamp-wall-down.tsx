import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const mount = pose({ scaleX: [1, 0.8, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 1] });
const swing = pose({ rotate: [0, -10, 8, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] });
const glow = pose({ opacity: [1, 1, 0.4, 1] }, { duration: 0.85, times: [0, 0.5, 0.7, 1] });

export default createAnimatedIcon({
	name: "lamp-wall-down",
	render: (part) => (
		<>
			<motion.path
				{...part(mount)}
				d="M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
				style={edge(0, 0.5)}
			/>
			<path d="M8 6h4a2 2 0 0 1 2 2v5" />
			<motion.g {...part(swing)} style={pivot(14, 13)}>
				<motion.path
					{...part(glow)}
					d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z"
				/>
			</motion.g>
		</>
	),
});
