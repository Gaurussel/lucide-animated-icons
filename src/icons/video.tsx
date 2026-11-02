import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "video",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1, 2, 2, 0] }, { duration: 0.75, times }))}
				d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1, 0.94, 1, 1] }, { duration: 0.75, times }))}
				height="12"
				rx="2"
				style={centered}
				width="14"
				x="2"
				y="6"
			/>
		</>
	),
});
