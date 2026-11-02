import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "figma",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ x: [0, -1.5, -1.5, 0], y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }),
				)}
				d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.5, 1.5, 0], y: [0, -1.5, -1.5, 0] },
						{ duration: 0.8, delay: 0.04, times: [0, 0.35, 0.6, 1] },
					),
				)}
				d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.5, 1.5, 0], y: [0, 0, 0, 0] },
						{ duration: 0.8, delay: 0.08, times: [0, 0.35, 0.6, 1] },
					),
				)}
				d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.5, -1.5, 0], y: [0, 1.5, 1.5, 0] },
						{ duration: 0.8, delay: 0.12, times: [0, 0.35, 0.6, 1] },
					),
				)}
				d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.5, -1.5, 0], y: [0, 0, 0, 0] },
						{ duration: 0.8, delay: 0.16, times: [0, 0.35, 0.6, 1] },
					),
				)}
				d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
			/>
		</>
	),
});
