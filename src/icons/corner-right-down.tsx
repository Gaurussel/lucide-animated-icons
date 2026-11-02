import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "corner-right-down",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -3.5, 0] }, { duration: 0.6, times: [0, 0.45, 1] }))}
				d="m10 15 5 5 5-5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.86, 1] }, { duration: 0.6, times: [0, 0.45, 1] }))}
				d="M4 4h7a4 4 0 0 1 4 4v12"
			/>
		</>
	),
});
