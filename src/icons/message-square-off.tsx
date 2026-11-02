import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				style={pivot(3, 21)}
			>
				<path d="M21 15V5a2 2 0 0 0-2-2H9" />
				<path d="M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
