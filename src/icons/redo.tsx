import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "redo",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2.5, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}
				d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 3.5, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}
				d="M21 7v6h-6"
			/>
		</>
	),
});
