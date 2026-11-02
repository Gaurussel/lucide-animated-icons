import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "person-standing",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="12"
				cy="5"
				r="1"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 1.25, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}
				d="m9 20 3-6 3 6"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="m6 8 6 2 6-2"
			/>
			<motion.path
				{...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M12 10v4"
			/>
		</>
	),
});
