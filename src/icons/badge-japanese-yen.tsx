import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "badge-japanese-yen",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.1, 1] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				style={centered}
			>
				<path d="m9 8 3 3v7" />
				<path d="m12 11 3-3" />
				<path d="M9 12h6" />
				<path d="M9 16h6" />
			</motion.g>
		</>
	),
});
