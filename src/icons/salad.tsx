import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "salad",
	render: (part) => (
		<>
			<path d="M7 21h10" />
			<motion.path
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.9, times: [0, 0.1, 0.3, 1] }))}
				d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, -3, 0, 0], rotate: [0, 0, -6, 0, 0] },
						{ duration: 0.9, times: [0, 0.1, 0.4, 0.65, 1] },
					),
				)}
				d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, -3.5, 0, 0], rotate: [0, 0, 8, 0, 0] },
						{ duration: 0.9, times: [0, 0.2, 0.5, 0.75, 1] },
					),
				)}
				d="m13 12 4-4"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, -3, 0, 0], rotate: [0, 0, -8, 0, 0] },
						{ duration: 0.9, times: [0, 0.3, 0.6, 0.85, 1] },
					),
				)}
				d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"
				style={centered}
			/>
		</>
	),
});
