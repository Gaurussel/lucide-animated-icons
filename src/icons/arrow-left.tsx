import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-left",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, 1.5, -3.5, 0] }, { duration: 0.55, times: [0, 0.25, 0.6, 1] }))}>
			<path d="m12 19-7-7 7-7" />
			<path d="M19 12H5" />
		</motion.g>
	),
});
