import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "moon-star",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -16, -16, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"
				style={centered}
			/>
			<motion.g
				{...part(
					pose(
						{ scale: [1, 0.3, 1.3, 1], opacity: [1, 0.4, 1, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.65, 1] },
					),
				)}
				style={centered}
			>
				<path d="M20 3v4" />
				<path d="M22 5h-4" />
			</motion.g>
		</>
	),
});
