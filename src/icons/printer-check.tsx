import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "printer-check",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -2, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.7, 1] }))}
				d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.5, 0.6, 1] }))}
				d="m16 19 2 2 4-4"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.96, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.7, 1] }))}
				d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ y: [0, 2, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.7, 1] }))}
				d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"
			/>
		</>
	),
});
