import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "microscope",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -10, -10, 0], y: [0, 2.5, 2.5, 0] },
						{ duration: 0.8, times: [0, 0.4, 0.65, 1] },
					),
				)}
				style={pivot(10, 12)}
			>
				<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
				<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0, -1, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}
				d="M6 18h8"
			/>
			<path d="M3 22h18" />
			<path d="M14 22a7 7 0 1 0 0-14h-1" />
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.45, 0.65, 1] }))}
				d="M9 14h2"
				style={centered}
			/>
		</>
	),
});
