import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tree-deciduous",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -7.5, 6, -3, 0], scale: [1, 0.96, 1, 0.98, 1] },
						{ duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] },
					),
				)}
				d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
				style={pivot(12, 19)}
			/>
			<path d="M12 19v3" />
		</>
	),
});
