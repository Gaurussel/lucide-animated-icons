import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-search-2",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 2, 2, 0], y: [0, 1, 0, -2, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.5, 0.75, 1] },
					),
				)}
			>
				<circle cx="11.5" cy="14.5" r="2.5" />
				<path d="M13.3 16.3 15 18" />
			</motion.g>
		</motion.g>
	),
});
