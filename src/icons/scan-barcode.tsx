import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scan-barcode",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.6, 1.6, 0, 0], y: [0, 1.6, 1.6, 0, 0] },
						{ duration: 0.8, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M3 7V5a2 2 0 0 1 2-2h2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.6, -1.6, 0, 0], y: [0, 1.6, 1.6, 0, 0] },
						{ duration: 0.8, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M17 3h2a2 2 0 0 1 2 2v2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.6, -1.6, 0, 0], y: [0, -1.6, -1.6, 0, 0] },
						{ duration: 0.8, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M21 17v2a2 2 0 0 1-2 2h-2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.6, 1.6, 0, 0], y: [0, -1.6, -1.6, 0, 0] },
						{ duration: 0.8, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M7 21H5a2 2 0 0 1-2-2v-2"
			/>
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 1, 0.6, 1, 1], opacity: [1, 1, 0.12, 1, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.32, 0.5, 1] },
					),
				)}
				d="M8 7v10"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 1, 0.6, 1, 1], opacity: [1, 1, 0.12, 1, 1] },
						{ duration: 0.8, times: [0, 0.32, 0.44, 0.62, 1] },
					),
				)}
				d="M12 7v10"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 1, 0.6, 1, 1], opacity: [1, 1, 0.12, 1, 1] },
						{ duration: 0.8, times: [0, 0.44, 0.56, 0.74, 1] },
					),
				)}
				d="M17 7v10"
				style={centered}
			/>
		</>
	),
});
