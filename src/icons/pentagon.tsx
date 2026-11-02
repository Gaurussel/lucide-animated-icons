import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pentagon",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -12, 0, 0], scale: [1, 0.88, 1, 1] },
						{ duration: 0.7, times: [0, 0.35, 0.7, 1] },
					),
				)}
				d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"
				style={centered}
			/>
		</>
	),
});
