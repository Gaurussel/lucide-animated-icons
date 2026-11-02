import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "triangle",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -7, 0, 7, 0], scaleY: [1, 0.94, 1, 0.94, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.5, 0.8, 1] },
					),
				)}
				d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
				style={pivot(12, 21)}
			/>
		</>
	),
});
