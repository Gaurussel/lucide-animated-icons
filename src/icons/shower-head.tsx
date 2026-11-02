import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shower-head",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -9, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				style={pivot(4, 4)}
			>
				<path d="m4 4 2.5 2.5" />
				<path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
				<path d="M15 5 5 15" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 7, 0], y: [0, 0, 7, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1] },
					),
				)}
				d="M14 17v.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 7, 0], y: [0, 0, 7, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.04 },
					),
				)}
				d="M10 16v.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 7, 0], y: [0, 0, 7, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.08 },
					),
				)}
				d="M13 13v.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 7, 0], y: [0, 0, 7, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.12 },
					),
				)}
				d="M16 10v.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 7, 0], y: [0, 0, 7, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.16 },
					),
				)}
				d="M11 20v.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 7, 0], y: [0, 0, 7, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.2 },
					),
				)}
				d="M17 14v.01"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 7, 0], y: [0, 0, 7, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.65, 1], delay: 0.24 },
					),
				)}
				d="M20 11v.01"
			/>
		</>
	),
});
