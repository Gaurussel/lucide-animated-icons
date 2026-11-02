import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clipboard-minus",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -4, -4, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.4, 0.65, 1] }))}
				height="4"
				rx="1"
				ry="1"
				width="8"
				x="8"
				y="2"
			/>
			<motion.g {...part(pose({ y: [0, 0, 0, 2, 0] }, { duration: 0.8, times: [0, 0.4, 0.5, 0.65, 1] }))}>
				<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
				<motion.path
					{...part(pose({ scaleX: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.15, 0.65, 1] }))}
					d="M9 14h6"
					style={centered}
				/>
			</motion.g>
		</>
	),
});
