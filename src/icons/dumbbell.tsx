import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dumbbell",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
				<motion.g
					{...part(pose({ scale: [1, 1, 0.9, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] }))}
					style={centered}
				>
					<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
				</motion.g>
				<path d="m2.5 21.5 1.4-1.4" />
				<path d="m20.1 3.9 1.4-1.4" />
				<motion.g
					{...part(pose({ scale: [1, 1, 0.9, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] }))}
					style={centered}
				>
					<path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
				</motion.g>
				<path d="m9.6 14.4 4.8-4.8" />
			</motion.g>
		</>
	),
});
