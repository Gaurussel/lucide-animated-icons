import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.35, 0.55, 1] };

export default createAnimatedIcon({
	name: "globe-lock",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: [0, -15, -15, 0] }, phase))} style={pivot(12, 12)}>
				<path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
				<path d="M2 12h8.5" />
			</motion.g>
			<motion.path {...part(pose({ y: [0, -3, -3, 0] }, phase))} d="M20 6V4a2 2 0 1 0-4 0v2" />
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 1, 0.8, 1] }, { duration: 0.85, times: [0, 0.35, 0.55, 0.8, 1] }))}
				height="5"
				rx="1"
				style={edge(0.5, 1)}
				width="8"
				x="14"
				y="6"
			/>
		</>
	),
});
