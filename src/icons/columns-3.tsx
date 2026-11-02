import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "columns-3",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path
				{...part(pose({ x: [0, 2.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				d="M9 3v18"
			/>
			<motion.path
				{...part(pose({ x: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				d="M15 3v18"
			/>
		</>
	),
});
