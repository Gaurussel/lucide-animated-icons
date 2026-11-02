import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chevron-first",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 1.5, -3, 0] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }))}
				d="m17 18-6-6 6-6"
			/>
			<motion.path
				{...part(pose({ x: [0, 0, -1.5, 0] }, { duration: 0.6, times: [0, 0.4, 0.7, 1] }))}
				d="M7 6v12"
			/>
		</>
	),
});
