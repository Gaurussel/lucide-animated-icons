import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.3, 0.6, 1];

export default createAnimatedIcon({
	name: "video-off",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 2, 2, 0], opacity: [1, 0.4, 0.4, 1] }, { duration: 0.8, times }))}
				d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"
			/>
			<motion.path
				{...part(pose({ x: [0, -1, -1, 0], opacity: [1, 0.4, 0.4, 1] }, { duration: 0.8, times }))}
				d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
