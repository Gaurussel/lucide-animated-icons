import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mountain",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 0.84, 1.18, 1], scaleX: [1, 1.06, 0.94, 1] },
						{ duration: 0.65, times: [0, 0.25, 0.6, 1] },
					),
				)}
				d="m8 3 4 8 5-5 5 15H2L8 3z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
