import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "power-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 1, 0.92, 1] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				style={pivot(12, 13)}
			>
				<path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
				<path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, -1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}
				d="M12 2v4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.65, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
