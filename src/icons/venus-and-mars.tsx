import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "venus-and-mars",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 0.8, 0, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.75, 1] }))}>
				<path d="M10 20h4" />
				<path d="M12 16v6" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, -0.8, 1.6, 1.6, 0], y: [0, 0.8, -1.6, -1.6, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.5, 0.75, 1] },
					),
				)}
			>
				<path d="M17 2h4v4" />
				<path d="m21 2-5.46 5.46" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.75, 1] }))}
				cx="12"
				cy="11"
				r="5"
				style={centered}
			/>
		</>
	),
});
