import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flask-conical-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -8, 6, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				style={pivot(12, 22)}
			>
				<path d="M10 2v2.343" />
				<path d="M14 2v6.343" />
				<path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" />
				<path d="M6.453 15H15" />
				<path d="M8.5 2h7" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.3, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
