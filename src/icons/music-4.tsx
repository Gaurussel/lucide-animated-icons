import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "music-4",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -5, 4, 0] }, { duration: 0.7, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(12, 21)}
			>
				<path d="M9 18V5l12-2v13" />
				<path d="m9 9 12-2" />
				<motion.circle
					{...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
					cx="6"
					cy="18"
					r="3"
				/>
				<motion.circle
					{...part(pose({ y: [0, 0, 1.5, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }))}
					cx="18"
					cy="16"
					r="3"
				/>
			</motion.g>
		</>
	),
});
