import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sword",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ x: [0, 1.5, -2.5, -2.5, 0], y: [0, 1.5, -2.5, -2.5, 0] },
					{ duration: 0.75, times: [0, 0.2, 0.5, 0.65, 1] },
				),
			)}
		>
			<motion.polyline
				{...part(pose({ scale: [1, 1, 1.04, 1.04, 1] }, { duration: 0.75, times: [0, 0.2, 0.5, 0.65, 1] }))}
				points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"
				style={edge(1, 1)}
			/>
			<line x1="13" x2="19" y1="19" y2="13" />
			<line x1="16" x2="20" y1="16" y2="20" />
			<line x1="19" x2="21" y1="21" y2="19" />
		</motion.g>
	),
});
