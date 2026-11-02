import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "gallery-vertical",
	render: (part) => (
		<>
			<path d="M3 2h18" />
			<motion.rect
				{...part(pose({ y: [0, -1.5, 2.5, 0] }, { duration: 0.7, times: [0, 0.2, 0.6, 1] }))}
				height="12"
				rx="2"
				width="18"
				x="3"
				y="6"
			/>
			<path d="M3 22h18" />
		</>
	),
});
