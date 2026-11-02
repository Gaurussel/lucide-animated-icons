import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "trophy",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.92, 1.22, 1.22, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 0.75, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
				<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
			</motion.g>
			<motion.g
				{...part(pose({ y: [0, 0.6, -1.7, -1.7, 0] }, { duration: 0.85, times: [0, 0.2, 0.5, 0.75, 1] }))}
			>
				<path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
				<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
				<path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 0.5, 1, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 0.75, 1] }))}
				d="M4 22h16"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
