import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "toilet",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -1.8, 1.8, -1, 0], scaleY: [1, 1, 0.9, 1, 0.94, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.45, 0.6, 0.75, 1] },
					),
				)}
				d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.82, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
