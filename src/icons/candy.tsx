import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "candy",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 0, -30, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				style={centered}
			>
				<path d="M10 7v10.9" />
				<path d="M14 6.1V17" />
				<path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, 2, 2, 0], y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"
			/>
			<motion.path
				{...part(pose({ x: [0, -2, -2, 0], y: [0, 2, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
			/>
		</>
	),
});
