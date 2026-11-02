import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-chevron-up",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ opacity: [1, 1, 0, 0, 1], y: [0, 0.875, -3.5, 3.5, 0] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
				d="m8 14 4-4 4 4"
			/>
		</>
	),
});
