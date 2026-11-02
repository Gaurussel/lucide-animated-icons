import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-big-down",
	render: (part) => (
		<motion.path
			{...part(pose({ y: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
			d="M15 6v6h4l-7 7-7-7h4V6h6z"
		/>
	),
});
