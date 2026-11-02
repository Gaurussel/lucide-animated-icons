import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-audio",
	render: (part) => (
		<>
			<path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.path
				{...part(
					pose(
						{ y: [0, -2.5, -2.5, -2.5, 0], scale: [1, 1, 1.14, 1, 1] },
						{ duration: 0.85, times: [0, 0.3, 0.5, 0.7, 1] },
					),
				)}
				d="M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"
				style={centered}
			/>
		</>
	),
});
