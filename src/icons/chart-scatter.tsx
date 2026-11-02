import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-scatter",
	render: (part) => (
		<>
			<motion.circle
				{...part(
					pose({ x: [0, -3, 0], y: [0, -3, 0], scale: [1, 1.8, 1] }, { duration: 0.65, times: [0, 0.5, 1] }),
				)}
				cx="7.5"
				cy="7.5"
				fill="currentColor"
				r=".5"
				style={centered}
			/>
			<motion.circle
				{...part(
					pose(
						{ x: [0, 3, 0], y: [0, -3, 0], scale: [1, 1.8, 1] },
						{ duration: 0.65, delay: 0.05, times: [0, 0.5, 1] },
					),
				)}
				cx="18.5"
				cy="5.5"
				fill="currentColor"
				r=".5"
				style={centered}
			/>
			<motion.circle
				{...part(
					pose(
						{ x: [0, 0, 0], y: [0, 0, 0], scale: [1, 1.8, 1] },
						{ duration: 0.65, delay: 0.1, times: [0, 0.5, 1] },
					),
				)}
				cx="11.5"
				cy="11.5"
				fill="currentColor"
				r=".5"
				style={centered}
			/>
			<motion.circle
				{...part(
					pose(
						{ x: [0, -3, 0], y: [0, 3, 0], scale: [1, 1.8, 1] },
						{ duration: 0.65, delay: 0.15, times: [0, 0.5, 1] },
					),
				)}
				cx="7.5"
				cy="16.5"
				fill="currentColor"
				r=".5"
				style={centered}
			/>
			<motion.circle
				{...part(
					pose(
						{ x: [0, 3, 0], y: [0, 3, 0], scale: [1, 1.8, 1] },
						{ duration: 0.65, delay: 0.2, times: [0, 0.5, 1] },
					),
				)}
				cx="17.5"
				cy="14.5"
				fill="currentColor"
				r=".5"
				style={centered}
			/>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
		</>
	),
});
