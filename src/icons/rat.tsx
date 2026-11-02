import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rat",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1, 3, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}>
				<motion.path
					{...part(pose({ scaleX: [1, 1, 1.12, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
					d="M13 22H4a2 2 0 0 1 0-4h12"
					style={edge(1, 0.5)}
				/>
				<motion.path
					{...part(pose({ opacity: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.7, 0.8, 1] }))}
					d="M16 9h.01"
				/>
				<path d="M13.236 18a3 3 0 0 0-2.2-5" />
				<path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" />
				<path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" />
			</motion.g>
		</>
	),
});
