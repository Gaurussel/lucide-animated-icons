import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "presentation",
	render: (part) => (
		<>
			<path d="M2 3h20" />
			<motion.path
				{...part(pose({ scaleY: [1, 0.7, 1, 1] }, { duration: 0.9, times: [0, 0.35, 0.7, 1] }))}
				d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 1.12, 1] }, { duration: 0.9, times: [0, 0.4, 0.7, 1] }))}
				d="m7 21 5-5 5 5"
				style={edge(0.5, 0)}
			/>
		</>
	),
});
