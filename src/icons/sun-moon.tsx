import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sun-moon",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 1, 0.8, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M12 2v2" />
				<path d="M13 8.129A4 4 0 0 1 15.873 11" />
				<path d="m19 5-1.256 1.256" />
				<path d="M20 12h2" />
			</motion.g>
			<motion.path
				{...part(pose({ rotate: [0, -20, -20, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M9 8a5 5 0 1 0 7 7 7 7 0 1 1-7-7"
				style={pivot(12, 12)}
			/>
		</>
	),
});
