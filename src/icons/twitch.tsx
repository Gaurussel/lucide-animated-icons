import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "twitch",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ y: [0, 0, -1.5, 0], scaleY: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }),
				)}
				d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
