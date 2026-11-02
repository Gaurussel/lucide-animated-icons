import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "panel-right-close",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.94, 0.94, 1] }, { duration: 0.75, times: [0, 0.4, 0.6, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.g {...part(pose({ x: [0, 3, 3, 0] }, { duration: 0.75, times: [0, 0.4, 0.6, 1] }))}>
				<path d="M15 3v18" />
				<motion.path
					{...part(pose({ x: [0, 1, 1, 0] }, { duration: 0.75, times: [0, 0.4, 0.6, 1] }))}
					d="m8 9 3 3-3 3"
				/>
			</motion.g>
		</>
	),
});
