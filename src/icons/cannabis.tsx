import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cannabis",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M12 22v-4"
			/>
			<motion.path
				{...part(
					pose(
						{ scale: [1, 0.88, 1, 1], rotate: [0, 0, -5, 0] },
						{ duration: 0.8, times: [0, 0.3, 0.65, 1] },
					),
				)}
				d="M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
				style={pivot(12, 18)}
			/>
		</>
	),
});
