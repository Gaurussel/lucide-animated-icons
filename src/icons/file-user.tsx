import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-user",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.g {...part(pose({ y: [0, 0, -1.2, -1.2, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}>
				<path d="M15 18a3 3 0 1 0-6 0" />
				<motion.circle
					{...part(pose({ scale: [1, 1, 1.2, 1.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
					cx="12"
					cy="13"
					r="2"
					style={centered}
				/>
			</motion.g>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
		</motion.g>
	),
});
