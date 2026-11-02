import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pen-tool",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -8, 0, 0] }, { duration: 0.9, times: [0, 0.25, 0.5, 1] }))}
				style={pivot(2, 2)}
			>
				<motion.path
					{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.35, 0.5, 1] }))}
					d="m2.3 2.3 7.286 7.286"
				/>
				<motion.circle
					{...part(pose({ scale: [1, 1, 1.5, 1] }, { duration: 0.9, times: [0, 0.55, 0.75, 1] }))}
					cx="11"
					cy="11"
					r="2"
					style={centered}
				/>
				<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
				<path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
			</motion.g>
		</>
	),
});
