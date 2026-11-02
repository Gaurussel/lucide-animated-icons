import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "spline-pointer",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, 0, -1.5, 0], y: [0, 0, 0, -1.5, 0], scale: [1, 1, 1, 0.85, 1] },
						{ duration: 0.9, times: [0, 0.15, 0.3, 0.8, 1] },
					),
				)}
				style={centered}
			>
				<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.3, 0.8, 1] }))}
				d="M5 17A12 12 0 0 1 17 5"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1, 1.6, 1] }, { duration: 0.9, times: [0, 0.15, 0.3, 0.8, 1] }))}
				cx="19"
				cy="5"
				r="2"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.6, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.3, 0.8, 1] }))}
				cx="5"
				cy="19"
				r="2"
				style={centered}
			/>
		</>
	),
});
