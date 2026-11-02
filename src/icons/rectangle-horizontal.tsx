import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rectangle-horizontal",
	render: (part) => (
		<motion.rect
			{...part(pose({ rotate: [0, 90, 90, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
			height="12"
			rx="2"
			style={centered}
			width="20"
			x="2"
			y="6"
		/>
	),
});
