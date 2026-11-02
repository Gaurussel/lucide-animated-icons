import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "triangle-dashed",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 0] }, { duration: 0.9, times: [0, 0.5, 1] }))}
				style={pivot(12, 14)}
			>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, times: [0, 0.5, 1] }))}
					d="M10.17 4.193a2 2 0 0 1 3.666.013"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, delay: 0.08, times: [0, 0.5, 1] }))}
					d="m15.874 7.743 1 1.732"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, delay: 0.16, times: [0, 0.5, 1] }))}
					d="m18.849 12.952 1 1.732"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, delay: 0.24, times: [0, 0.5, 1] }))}
					d="M21.824 18.18a2 2 0 0 1-1.835 2.824"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, delay: 0.32, times: [0, 0.5, 1] }))}
					d="M14 21h2"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, delay: 0.4, times: [0, 0.5, 1] }))}
					d="M8 21h2"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, delay: 0.48, times: [0, 0.5, 1] }))}
					d="M4.024 21a2 2 0 0 1-1.839-2.839"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, delay: 0.56, times: [0, 0.5, 1] }))}
					d="m5.136 12.952-1 1.732"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 0.1, 1] }, { duration: 0.35, delay: 0.64, times: [0, 0.5, 1] }))}
					d="m8.102 7.743-1 1.732"
					style={centered}
				/>
			</motion.g>
		</>
	),
});
