import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-arrow-out-down-right",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ opacity: [1, 1, 0, 0, 1], x: [0, -0.75, 3, -3, 0], y: [0, -0.75, 3, -3, 0] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="m21 21-9-9" />
				<path d="M21 15v6h-6" />
			</motion.g>
		</>
	),
});
