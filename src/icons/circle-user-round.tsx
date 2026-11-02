import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-user-round",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.7, delay: 0.08, times: [0, 0.35, 0.6, 1] }))}
				d="M18 20a6 6 0 0 0-12 0"
			/>
			<motion.circle
				{...part(
					pose(
						{ y: [0, -4, -4, -4, 0], rotate: [0, 0, -25, 20, 0] },
						{ duration: 0.75, times: [0, 0.3, 0.5, 0.7, 1] },
					),
				)}
				cx="12"
				cy="10"
				r="4"
				style={pivot(12, 14)}
			/>
			<circle cx="12" cy="12" r="10" />
		</>
	),
});
