import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "megaphone-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 2, 0], y: [0, 1, -1.5, 0], rotate: [0, 4, -6, 0] },
						{ duration: 0.7, times: [0, 0.25, 0.6, 1] },
					),
				)}
				style={pivot(8, 14)}
			>
				<path d="M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" />
				<path d="M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
				<path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
				<path d="M8 8v6" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.3, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
