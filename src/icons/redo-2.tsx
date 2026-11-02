import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "redo-2",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}
				d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}
				d="m15 14 5-5-5-5"
			/>
		</>
	),
});
