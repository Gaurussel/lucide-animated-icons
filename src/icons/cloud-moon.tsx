import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-moon",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -18, 0] }, { duration: 0.9, times: [0, 0.4, 1] }))}
				d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"
				style={pivot(16, 10)}
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 0] }, { duration: 0.9, times: [0, 0.4, 1] }))}
				d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"
			/>
		</>
	),
});
