import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "paperclip",
	render: (part) => (
		<motion.path
			{...part(pose({ y: [0, -2, 1, 0], rotate: [0, 8, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
			d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"
			style={centered}
		/>
	),
});
