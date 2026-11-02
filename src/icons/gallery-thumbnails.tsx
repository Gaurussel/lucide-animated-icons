import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const thumb = (index: number) =>
	pose({ scaleX: [1, 2, 1], y: [0, -1, 0] }, { duration: 0.4, delay: 0.3 + index * 0.1, times: [0, 0.5, 1] });

export default createAnimatedIcon({
	name: "gallery-thumbnails",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ x: [0, 1, -2.5, 0] }, { duration: 0.45, times: [0, 0.2, 0.6, 1] }))}
				height="14"
				rx="2"
				width="18"
				x="3"
				y="3"
			/>
			<motion.path {...part(thumb(0))} d="M4 21h1" style={centered} />
			<motion.path {...part(thumb(1))} d="M9 21h1" style={centered} />
			<motion.path {...part(thumb(2))} d="M14 21h1" style={centered} />
			<motion.path {...part(thumb(3))} d="M19 21h1" style={centered} />
		</>
	),
});
