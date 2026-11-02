import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sigma",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ pathLength: [1, 0, 0, 1], scale: [1, 0.9, 0.9, 1] },
					{ duration: 0.75, times: [0, 0.3, 0.5, 1] },
				),
			)}
			d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
			style={centered}
		/>
	),
});
