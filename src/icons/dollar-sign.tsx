import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dollar-sign",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.25, 1] }, { duration: 0.75, times: [0, 0.5, 1] }))}
				style={centered}
			>
				<motion.g
					{...part(pose({ scaleY: [1, 0.6, 1] }, { duration: 0.75, times: [0, 0.4, 1] }))}
					style={centered}
				>
					<line x1="12" x2="12" y1="2" y2="22" />
				</motion.g>
				<motion.g {...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.75, times: [0, 0.4, 1] }))}>
					<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
				</motion.g>
			</motion.g>
		</>
	),
});
