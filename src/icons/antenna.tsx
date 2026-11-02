import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "antenna",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -13, 13, -6, 0] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.75, 1] }))}
				d="M2 12 7 2"
				style={pivot(2, 12)}
			/>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -13, 13, -6, 0] },
						{ duration: 0.8, delay: 0.07, times: [0, 0.2, 0.5, 0.75, 1] },
					),
				)}
				d="m7 12 5-10"
				style={pivot(7, 12)}
			/>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -13, 13, -6, 0] },
						{ duration: 0.8, delay: 0.14, times: [0, 0.2, 0.5, 0.75, 1] },
					),
				)}
				d="m12 12 5-10"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -13, 13, -6, 0] },
						{ duration: 0.8, delay: 0.21000000000000002, times: [0, 0.2, 0.5, 0.75, 1] },
					),
				)}
				d="m17 12 5-10"
				style={pivot(17, 12)}
			/>
			<path d="M4.5 7h15" />
			<path d="M12 16v6" />
		</>
	),
});
