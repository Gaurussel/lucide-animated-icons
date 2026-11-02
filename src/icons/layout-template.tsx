import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const timing = { duration: 0.5 };

export default createAnimatedIcon({
	name: "layout-template",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.5, 1] }, timing))}
				height="7"
				rx="1"
				style={edge(0.5, 0)}
				width="18"
				x="3"
				y="3"
			/>
			<motion.rect
				{...part(pose({ scaleX: [1, 1.35, 1] }, { ...timing, delay: 0.2 }))}
				height="7"
				rx="1"
				style={edge(0, 0.5)}
				width="9"
				x="3"
				y="14"
			/>
			<motion.rect
				{...part(pose({ scaleX: [1, 0.5, 1] }, { ...timing, delay: 0.3 }))}
				height="7"
				rx="1"
				style={edge(1, 0.5)}
				width="5"
				x="16"
				y="14"
			/>
		</>
	),
});
