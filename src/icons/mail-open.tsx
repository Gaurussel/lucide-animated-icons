import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mail-open",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.7, times: [0, 0.45, 0.6, 1] }))}>
				<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
				<motion.path
					{...part(pose({ scaleY: [1, 0.4, 0.4, 1] }, { duration: 0.7, times: [0, 0.45, 0.6, 1] }))}
					d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
					style={edge(0.5, 0)}
				/>
			</motion.g>
		</>
	),
});
