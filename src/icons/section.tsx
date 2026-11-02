import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "section",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.2, 1.8, 0, 0], rotate: [0, -4, 4, 0, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.55, 0.85, 1] },
					),
				)}
				d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.2, -1.8, 0, 0], rotate: [0, 4, -4, 0, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.55, 0.85, 1] },
					),
				)}
				d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"
				style={centered}
			/>
		</>
	),
});
