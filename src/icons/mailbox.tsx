import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mailbox",
	render: (part) => (
		<>
			<path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
			<motion.polyline
				{...part(pose({ y: [0, 0, -5, -5, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.75, 1] }))}
				points="15,9 18,9 18,11"
			/>
			<motion.g
				{...part(pose({ rotate: [0, -50, -50, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(9, 19)}
			>
				<path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
				<line x1="6" x2="7" y1="10" y2="10" />
			</motion.g>
		</>
	),
});
