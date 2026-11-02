import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "logs",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ scaleX: [1, 0.05, 1], y: [0, -1.5, 0] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.15 }),
				)}
				d="M13 6h8"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(
					pose({ scaleX: [1, 0.05, 1], y: [0, -1.5, 0] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.28 }),
				)}
				d="M13 12h8"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(
					pose(
						{ scaleX: [1, 0.05, 1], y: [0, -1.5, 0] },
						{ duration: 0.4, times: [0, 0.5, 1], delay: 0.41000000000000003 },
					),
				)}
				d="M13 18h8"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.2, 1], y: [0, 1.5, 0] }, { duration: 0.3, times: [0, 0.5, 1] }))}
				d="M3 6h1"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.2, 1], y: [0, 1.5, 0] }, { duration: 0.3, times: [0, 0.5, 1] }))}
				d="M8 6h1"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ scale: [1, 0.2, 1], y: [0, 1.5, 0] }, { duration: 0.3, times: [0, 0.5, 1], delay: 0.13 }),
				)}
				d="M3 12h1"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ scale: [1, 0.2, 1], y: [0, 1.5, 0] }, { duration: 0.3, times: [0, 0.5, 1], delay: 0.13 }),
				)}
				d="M8 12h1"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ scale: [1, 0.2, 1], y: [0, 1.5, 0] }, { duration: 0.3, times: [0, 0.5, 1], delay: 0.26 }),
				)}
				d="M3 18h1"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ scale: [1, 0.2, 1], y: [0, 1.5, 0] }, { duration: 0.3, times: [0, 0.5, 1], delay: 0.26 }),
				)}
				d="M8 18h1"
				style={centered}
			/>
		</>
	),
});
