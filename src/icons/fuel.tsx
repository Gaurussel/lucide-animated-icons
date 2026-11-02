import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.25, 0.75, 1] };
const jitter = pose(
	{ x: [0, 0, 0.6, 0, -0.6, 0, 0], rotate: [0, 0, 1, 0, -1, 0, 0] },
	{ duration: 0.85, times: [0, 0.3, 0.4, 0.5, 0.6, 0.7, 1] },
);

export default createAnimatedIcon({
	name: "fuel",
	render: (part) => (
		<motion.g {...part(jitter)} style={edge(0.5, 1)}>
			<line x1="3" x2="15" y1="22" y2="22" />
			<motion.line
				{...part(pose({ scaleX: [1, 1, 0.1, 1] }, phase))}
				style={edge(0, 0.5)}
				x1="4"
				x2="14"
				y1="9"
				y2="9"
			/>
			<path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
			<motion.path
				{...part(pose({ rotate: [0, -32, -32, 0] }, phase))}
				d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
				style={pivot(14, 13)}
			/>
		</motion.g>
	),
});
