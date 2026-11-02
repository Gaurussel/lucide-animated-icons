import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ruler",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -8, -8, 0] }, { duration: 0.9, times: [0, 0.2, 0.7, 1] }))}
				d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
				style={centered}
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.15, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.3, 0.45, 1] }))}
				d="m8.5 6.5 2-2"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.15, 1, 1] }, { duration: 0.9, times: [0, 0.32, 0.42, 0.57, 1] }))}
				d="m11.5 9.5 2-2"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.15, 1, 1] }, { duration: 0.9, times: [0, 0.44, 0.54, 0.69, 1] }))}
				d="m14.5 12.5 2-2"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.15, 1, 1] }, { duration: 0.9, times: [0, 0.56, 0.66, 0.81, 1] }))}
				d="m17.5 15.5 2-2"
			/>
		</>
	),
});
