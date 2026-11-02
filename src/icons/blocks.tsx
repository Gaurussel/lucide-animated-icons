import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "blocks",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.85, 1] }, { duration: 0.75, times: [0, 0.65, 0.82, 1] }))}
				d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
				style={edge(0, 1)}
			/>
			<motion.rect
				{...part(
					pose(
						{ x: [0, 4, 4, 0, 0], y: [0, -4, -4, 0, 0], rotate: [0, 45, 45, 0, 0] },
						{ duration: 0.75, times: [0, 0.3, 0.45, 0.75, 1] },
					),
				)}
				height="8"
				rx="1"
				style={centered}
				width="8"
				x="14"
				y="2"
			/>
		</>
	),
});
