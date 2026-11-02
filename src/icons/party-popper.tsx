import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "party-popper",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -12, 0, 0] }, { duration: 0.9, times: [0, 0.2, 0.4, 1] }))}
				style={pivot(2, 22)}
			>
				<path d="M5.8 11.3 2 22l10.7-3.79" />
				<path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ scale: [1, 1, 2.2, 1], x: [0, 0, -1.5, 0], y: [0, 0, -1.5, 0] },
						{ duration: 0.9, times: [0, 0.35, 0.6, 1] },
					),
				)}
				d="M4 3h.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ scale: [1, 1, 2.2, 1], x: [0, 0, 0, 0], y: [0, 0, -1.5, 0] },
						{ duration: 0.9, times: [0, 0.35, 0.6, 1], delay: 0.05 },
					),
				)}
				d="M15 2h.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ scale: [1, 1, 2.2, 1], x: [0, 0, 1.5, 0], y: [0, 0, 0, 0] },
						{ duration: 0.9, times: [0, 0.35, 0.6, 1], delay: 0.1 },
					),
				)}
				d="M22 8h.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ scale: [1, 1, 2.2, 1], x: [0, 0, 1.5, 0], y: [0, 0, 1.5, 0] },
						{ duration: 0.9, times: [0, 0.35, 0.6, 1], delay: 0.15 },
					),
				)}
				d="M22 20h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.3, 0.42, 1] }))}
				d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.3, 0.42, 1], delay: 0.05 }))}
				d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.3, 0.42, 1], delay: 0.1 }))}
				d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"
			/>
		</>
	),
});
