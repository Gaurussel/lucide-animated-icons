import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "siren",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.82, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M7 18v-6a5 5 0 1 1 10 0v6" />
				<path d="M12 12v6" />
			</motion.g>
			<path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 4, 0], y: [0, 0, 0, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.65, 1] },
					),
				)}
				d="M21 12h1"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 4, 0], y: [0, 0, -4, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.65, 1] },
					),
				)}
				d="M18.5 4.5 18 5"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -4, 0], y: [0, 0, 0, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.65, 1] },
					),
				)}
				d="M2 12h1"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 0, 0], y: [0, 0, -4, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.65, 1] },
					),
				)}
				d="M12 2v1"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -4, 0], y: [0, 0, -4, 0], opacity: [1, 1, 0, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.65, 1] },
					),
				)}
				d="m4.929 4.929.707.707"
			/>
		</>
	),
});
