import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-arrow-out-up-right",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.92, 1] }, { duration: 0.75, times: [0, 0.2, 0.5, 1] }))}
				d="M22 12A10 10 0 1 1 12 2"
				style={centered}
			/>
			<motion.g
				{...part(
					pose(
						{ opacity: [1, 1, 0, 0, 1], x: [0, -1.5, 6, -6, 0], y: [0, 1.5, -6, 6, 0] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="M22 2 12 12" />
				<path d="M16 2h6v6" />
			</motion.g>
		</>
	),
});
