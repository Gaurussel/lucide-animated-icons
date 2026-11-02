import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-arrow-out-down-right",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.92, 1] }, { duration: 0.75, times: [0, 0.2, 0.5, 1] }))}
				d="M12 22a10 10 0 1 1 10-10"
				style={centered}
			/>
			<motion.g
				{...part(
					pose(
						{ opacity: [1, 1, 0, 0, 1], x: [0, -1.5, 6, -6, 0], y: [0, -1.5, 6, -6, 0] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="M22 22 12 12" />
				<path d="M22 16v6h-6" />
			</motion.g>
		</>
	),
});
