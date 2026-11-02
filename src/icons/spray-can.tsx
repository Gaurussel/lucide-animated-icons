import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "spray-can",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -8, 0], y: [0, 0, -6, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1] },
					),
				)}
				d="M3 3h.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -8, 0], y: [0, 0, -6, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.05 },
					),
				)}
				d="M7 5h.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -8, 0], y: [0, 0, -6, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.1 },
					),
				)}
				d="M11 7h.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -8, 0], y: [0, 0, -6, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.15 },
					),
				)}
				d="M3 7h.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -8, 0], y: [0, 0, -6, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.2 },
					),
				)}
				d="M7 9h.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -8, 0], y: [0, 0, -6, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.25 },
					),
				)}
				d="M3 11h.01"
			/>
			<motion.g {...part(pose({ y: [0, 2.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}>
				<rect height="4" width="4" x="15" y="5" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.85, 0.85, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
				<path d="m13 14 8-2" />
				<path d="m13 19 8-2" />
			</motion.g>
		</>
	),
});
