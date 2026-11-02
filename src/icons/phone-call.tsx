import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "phone-call",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 0, 1] }, { duration: 0.9, times: [0, 0.25, 0.4, 0.65, 1] }))}
				d="M13 2a9 9 0 0 1 9 9"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.25, 0.4, 0.65, 1] }))}
				d="M13 6a5 5 0 0 1 5 5"
			/>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -12, 12, -8, 0, 0], y: [0, -1.5, -1.5, -1.5, 0, 0] },
						{ duration: 0.9, times: [0, 0.1, 0.25, 0.4, 0.5, 1] },
					),
				)}
				d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
				style={centered}
			/>
		</>
	),
});
