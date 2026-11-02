import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "crop",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0], y: [0, 1.5, -2, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				d="M6 2v14a2 2 0 0 0 2 2h14"
			/>
			<motion.path
				{...part(pose({ x: [0, 1.5, -2, 0], y: [0, -1.5, 2, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				d="M18 22V8a2 2 0 0 0-2-2H2"
			/>
		</>
	),
});
