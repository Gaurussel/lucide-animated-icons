import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mouse-pointer-ban",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1, 2, 2, 0], y: [0, -1, 2, 2, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.45, 0.6, 1] },
					),
				)}
				d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"
			/>
			<motion.g
				{...part(pose({ rotate: [0, 0, -12, 8, 0] }, { duration: 0.8, times: [0, 0.45, 0.65, 0.85, 1] }))}
				style={centered}
			>
				<circle cx="16" cy="16" r="6" />
				<path d="m11.8 11.8 8.4 8.4" />
			</motion.g>
		</>
	),
});
