import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sparkle",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -20, 30, 0], scale: [1, 0.7, 0.85, 1] },
						{ duration: 0.85, times: [0, 0.3, 0.7, 1] },
					),
				)}
				style={centered}
			>
				<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
			</motion.g>
		</>
	),
});
