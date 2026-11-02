import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "copy-minus",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, 2, 2, 0], y: [0, 2, 2, 0] }, { duration: 0.75, times: [0, 0.35, 0.55, 1] }))}
			>
				<motion.line
					{...part(pose({ scaleX: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.2, 0.55, 1] }))}
					style={centered}
					x1="12"
					x2="18"
					y1="15"
					y2="15"
				/>
				<rect height="14" rx="2" ry="2" width="14" x="8" y="8" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.5, -1.5, 0], y: [0, -1.5, -1.5, 0] },
						{ duration: 0.75, times: [0, 0.35, 0.55, 1] },
					),
				)}
				d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
			/>
		</>
	),
});
