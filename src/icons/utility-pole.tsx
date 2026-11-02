import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "utility-pole",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -6, 5, -2, 0] }, { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] }))}
				style={pivot(12, 22)}
			>
				<path d="M12 2v20" />
				<path d="M2 5h20" />
				<motion.path
					{...part(pose({ scaleY: [1, 2.2, 1] }, { duration: 0.4, times: [0, 0.5, 1] }))}
					d="M3 3v2"
					style={edge(0.5, 1)}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 2.2, 1] }, { duration: 0.4, delay: 0.08, times: [0, 0.5, 1] }))}
					d="M7 3v2"
					style={edge(0.5, 1)}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 2.2, 1] }, { duration: 0.4, delay: 0.16, times: [0, 0.5, 1] }))}
					d="M17 3v2"
					style={edge(0.5, 1)}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 2.2, 1] }, { duration: 0.4, delay: 0.24, times: [0, 0.5, 1] }))}
					d="M21 3v2"
					style={edge(0.5, 1)}
				/>
				<motion.path
					{...part(pose({ pathLength: [1, 0.4, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.5, 1] }))}
					d="m19 5-7 7-7-7"
				/>
			</motion.g>
		</>
	),
});
