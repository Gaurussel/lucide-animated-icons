import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-pen",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.85, times: [0, 0.25, 0.8, 1] }))}>
				<path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" />
				<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1, 2, 0.5, 2.5, 0], y: [0, -1.5, 0, 0.8, 0, 0], rotate: [0, -8, 0, 0, 0, 0] },
						{ duration: 0.85, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
					),
				)}
				d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
				style={edge(0, 1)}
			/>
		</>
	),
});
