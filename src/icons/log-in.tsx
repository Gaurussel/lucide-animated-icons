import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "log-in",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 5, -5, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="m10 17 5-5-5-5" />
				<path d="M15 12H3" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, 0, 1, 0] }, { duration: 0.75, times: [0, 0.3, 0.5, 1] }))}
				d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
			/>
		</>
	),
});
