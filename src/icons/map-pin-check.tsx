import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "map-pin-check",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}>
				<path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
				<motion.circle
					{...part(pose({ scale: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
					cx="12"
					cy="10"
					r="3"
					style={centered}
				/>
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.65, 1] }))}
				d="m16 18 2 2 4-4"
			/>
		</>
	),
});
