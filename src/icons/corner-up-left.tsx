import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "corner-up-left",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 3.5, 0] }, { duration: 0.6, times: [0, 0.45, 1] }))}
				d="M20 20v-7a4 4 0 0 0-4-4H4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.86, 1] }, { duration: 0.6, times: [0, 0.45, 1] }))}
				d="M9 14 4 9l5-5"
			/>
		</>
	),
});
