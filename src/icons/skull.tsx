import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "skull",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 0, -6, 4, 0] }, { duration: 0.85, times: [0, 0.3, 0.5, 0.75, 1] }))}
				style={pivot(12, 22)}
			>
				<path d="m12.5 17-.5-1-.5 1h1z" />
				<path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" />
				<motion.circle
					{...part(pose({ scaleY: [1, 0.1, 1, 1] }, { duration: 0.85, times: [0, 0.15, 0.3, 1] }))}
					cx="15"
					cy="12"
					r="1"
					style={centered}
				/>
				<motion.circle
					{...part(pose({ scaleY: [1, 0.1, 1, 1] }, { duration: 0.85, times: [0, 0.15, 0.3, 1] }))}
					cx="9"
					cy="12"
					r="1"
					style={centered}
				/>
			</motion.g>
		</>
	),
});
