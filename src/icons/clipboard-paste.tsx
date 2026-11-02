import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clipboard-paste",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -4, -4, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.4, 0.65, 1] }))}
				height="4"
				rx="1"
				width="8"
				x="8"
				y="2"
			/>
			<path d="M16 4h2a2 2 0 0 1 2 2v1.344" />
			<path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" />
			<motion.g {...part(pose({ x: [0, -2.5, 2, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M11 14h10" />
				<path d="m17 18 4-4-4-4" />
			</motion.g>
		</>
	),
});
