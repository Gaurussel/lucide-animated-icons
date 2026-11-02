import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "heart",
	render: (part) => (
		<motion.path
			{...part(
				pose({ scale: [1, 1.14, 1, 1.08, 1, 1] }, { duration: 0.8, times: [0, 0.18, 0.36, 0.52, 0.7, 1] }),
			)}
			d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
			style={centered}
		/>
	),
});
