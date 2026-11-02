import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cassette-tape",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.92, 0.92, 1] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
				height="16"
				rx="2"
				style={centered}
				width="20"
				x="2"
				y="4"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.4, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))}
				cx="8"
				cy="10"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.4, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))}
				d="M8 12h8"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1.6, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))}
				cx="16"
				cy="10"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"
			/>
		</>
	),
});
