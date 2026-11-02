import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square",
	render: (part) => (
		<motion.rect
			{...part(
				pose({ scale: [1, 0.9, 1, 1], rotate: [0, 0, 6, 0] }, { duration: 0.6, times: [0, 0.3, 0.65, 1] }),
			)}
			height="18"
			rx="2"
			style={centered}
			width="18"
			x="3"
			y="3"
		/>
	),
});
