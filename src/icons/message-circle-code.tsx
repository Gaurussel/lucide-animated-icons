import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-circle-code",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(2, 22)}
		>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
			<motion.path
				{...part(pose({ x: [0, 0, -1.5, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}
				d="M10 9.5 8 12l2 2.5"
			/>
			<motion.path
				{...part(pose({ x: [0, 0, 1.5, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}
				d="m14 9.5 2 2.5-2 2.5"
			/>
		</motion.g>
	),
});
