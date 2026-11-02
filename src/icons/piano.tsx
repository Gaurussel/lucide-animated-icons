import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "piano",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -6, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(12, 22)}
			>
				<motion.path
					{...part(pose({ scaleY: [1, 0.25, 1] }, { duration: 0.4 }))}
					d="M6 14v4"
					style={edge(0.5, 0)}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 0.25, 1] }, { duration: 0.4, delay: 0.12 }))}
					d="M10 14v4"
					style={edge(0.5, 0)}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 0.25, 1] }, { duration: 0.4, delay: 0.24 }))}
					d="M14 14v4"
					style={edge(0.5, 0)}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 0.25, 1] }, { duration: 0.4, delay: 0.36 }))}
					d="M18 14v4"
					style={edge(0.5, 0)}
				/>
				<path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" />
				<path d="M2 14h20" />
			</motion.g>
		</>
	),
});
