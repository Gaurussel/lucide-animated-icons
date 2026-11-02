import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-share",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1, 4, -3, 0], y: [0, 1, -4, 3, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.55, 0.56, 1] },
					),
				)}
			>
				<path d="M16 3h5v5" />
				<path d="m16 8 5-5" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"
				style={edge(0, 1)}
			/>
		</>
	),
});
