import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "wallpaper",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, 2.5, -3, 0] }, { duration: 0.85, times: [0, 0.25, 0.65, 1] }))}
				cx="8"
				cy="9"
				r="2"
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 1] }))}
				d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
				style={centered}
			/>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.2, 1] }, { duration: 0.85, times: [0, 0.4, 0.7, 1] }))}
				style={edge(0.5, 0)}
			>
				<path d="M8 21h8" />
				<path d="M12 17v4" />
			</motion.g>
		</>
	),
});
