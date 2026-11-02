import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "eye",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ scaleY: [1, 0.1, 1, 1, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.6, 0.82, 1] }),
				)}
				style={centered}
			>
				<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
				<motion.circle
					{...part(pose({ x: [0, 0, 0, -3, 3, 0] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.6, 0.82, 1] }))}
					cx="12"
					cy="12"
					r="3"
				/>
			</motion.g>
		</>
	),
});
