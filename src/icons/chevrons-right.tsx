import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chevrons-right",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1, 2.5, 0] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }))}
				d="m6 17 5-5-5-5"
			/>
			<motion.path
				{...part(pose({ x: [0, -1, 2.5, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.25, 0.6, 1] }))}
				d="m13 17 5-5-5-5"
			/>
		</>
	),
});
