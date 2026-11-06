import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const arm = pose(
	{ rotate: [0, 3.6, -8.4, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const shade = pose(
	{ rotate: [0, 0, 16.8, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.38, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "lamp-wall-down",
	render: (part) => (
		<>
			<path d="M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
			<motion.g {...part(arm)} style={pivot(8, 6)}>
				<path d="M8 6h4a2 2 0 0 1 2 2v5" />
				<motion.path
					{...part(shade)}
					d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z"
					style={pivot(14, 13)}
				/>
			</motion.g>
		</>
	),
});
