import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-big-right",
	render: (part) => (
		<motion.path
			{...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
			d="M6 9h6V5l7 7-7 7v-4H6V9z"
		/>
	),
});
