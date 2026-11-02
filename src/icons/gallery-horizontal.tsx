import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "gallery-horizontal",
	render: (part) => (
		<>
			<path d="M2 3v18" />
			<motion.rect
				{...part(pose({ x: [0, -1.5, 2.5, 0] }, { duration: 0.7, times: [0, 0.2, 0.6, 1] }))}
				height="18"
				rx="2"
				width="12"
				x="6"
				y="3"
			/>
			<path d="M22 3v18" />
		</>
	),
});
