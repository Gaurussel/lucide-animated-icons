import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "test-tube",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -10, -10, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(12, 22)}
		>
			<path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
			<path d="M8.5 2h7" />
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				d="M14.5 16h-5"
			/>
		</motion.g>
	),
});
