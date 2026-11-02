import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bird",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 0.5, -1.8, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.8, 1] }))}>
				<motion.path
					{...part(pose({ opacity: [1, 1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.8, 1] }))}
					d="M16 7h.01"
				/>
				<path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
				<motion.path
					{...part(pose({ x: [0, 0, 0.8, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.8, 1] }))}
					d="m20 7 2 .5-2 .5"
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 1, 0.6, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.8, 1] }))}
					d="M10 18v3"
					style={edge(0.5, 0)}
				/>
				<motion.path
					{...part(pose({ scaleY: [1, 1, 0.6, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.8, 1] }))}
					d="M14 17.75V21"
					style={edge(0.5, 0)}
				/>
				<motion.path
					{...part(pose({ rotate: [0, 0, -18, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.8, 1] }))}
					d="M7 18a6 6 0 0 0 3.84-10.61"
					style={pivot(7, 18)}
				/>
			</motion.g>
		</>
	),
});
