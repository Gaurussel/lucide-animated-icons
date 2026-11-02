import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cat",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -6, -6, 0] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}
			style={pivot(12, 14)}
		>
			<path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.4, 0.5, 0.6, 1] }))}
				style={centered}
			>
				<path d="M8 14v.5" />
				<path d="M16 14v.5" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0, 0.6, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				d="M11.25 16.25h1.5L12 17l-.75-.75Z"
			/>
		</motion.g>
	),
});
