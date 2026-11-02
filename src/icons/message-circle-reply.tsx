import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-circle-reply",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(2, 22)}
		>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.g {...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
				<path d="m10 15-3-3 3-3" />
				<path d="M7 12h7a2 2 0 0 1 2 2v1" />
			</motion.g>
		</motion.g>
	),
});
