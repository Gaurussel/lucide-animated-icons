import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "club",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, 8, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<motion.path
				{...part(pose({ scale: [1, 0.94, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
				style={pivot(12, 12)}
			/>
			<path d="M12 17.66L12 22" />
		</motion.g>
	),
});
