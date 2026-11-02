import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bed-single",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.75, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"
			/>
			<path d="M3 18h18" />
		</>
	),
});
