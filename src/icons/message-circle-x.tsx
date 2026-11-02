import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-circle-x",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(2, 22)}
		>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.path
				{...part(pose({ scale: [1, 0.2, 1, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				d="m15 9-6 6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
				d="m9 9 6 6"
				style={centered}
			/>
		</motion.g>
	),
});
