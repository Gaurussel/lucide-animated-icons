import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "martini",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -14, -14, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
			style={pivot(12, 22)}
		>
			<path d="M8 22h8" />
			<path d="M12 11v11" />
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.88, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				d="m19 3-7 8-7-8Z"
				style={edge(0.5, 1)}
			/>
		</motion.g>
	),
});
