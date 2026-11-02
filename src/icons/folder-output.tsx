import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folder-output",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 0, -1.5, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				d="M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
			/>
			<motion.g
				{...part(
					pose(
						{ x: [0, 2, -7, 7, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="M2 13h10" />
				<path d="m5 10-3 3 3 3" />
			</motion.g>
		</>
	),
});
