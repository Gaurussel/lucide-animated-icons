import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "undo",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, 5, -20, -20, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 0.7, 1] }))}
				d="M3 7v6h6"
				style={pivot(12, 17)}
			/>
			<motion.path
				{...part(pose({ rotate: [0, 4, -14, -14, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 0.7, 1] }))}
				d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
				style={pivot(12, 17)}
			/>
		</>
	),
});
