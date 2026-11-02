import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "audio-waveform",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 0.45, 1, 1], scaleX: [1, 1, 0.88, 1] },
						{ duration: 0.8, times: [0, 0.35, 0.7, 1] },
					),
				)}
				d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
				style={centered}
			/>
		</>
	),
});
