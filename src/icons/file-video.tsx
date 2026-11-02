import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const body = pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });

export default createAnimatedIcon({
	name: "file-video",
	render: (part) => (
		<motion.g {...part(body)}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.path
				{...part(
					pose(
						{ scale: [1, 0.85, 1.25, 1], x: [0, -1, 1.5, 0] },
						{ duration: 0.8, times: [0, 0.25, 0.6, 1] },
					),
				)}
				d="m10 11 5 3-5 3v-6Z"
				style={centered}
			/>
		</motion.g>
	),
});
