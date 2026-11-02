import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chevron-left",
	render: (part) => (
		<motion.path
			{...part(pose({ x: [0, 1, -2.5, 0] }, { duration: 0.5, times: [0, 0.25, 0.6, 1] }))}
			d="m15 18-6-6 6-6"
		/>
	),
});
