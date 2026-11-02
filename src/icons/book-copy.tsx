import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-copy",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.5, -1.5, 0], y: [0, -1.5, -1.5, 0] },
						{ duration: 0.7, times: [0, 0.35, 0.65, 1] },
					),
				)}
				d="M2 16V4a2 2 0 0 1 2-2h11"
			/>
			<motion.g
				{...part(
					pose({ x: [0, 1.5, 1.5, 0], y: [0, 1.5, 1.5, 0] }, { duration: 0.7, times: [0, 0.35, 0.65, 1] }),
				)}
			>
				<path d="M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12" />
				<path d="M5 14H4a2 2 0 1 0 0 4h1" />
			</motion.g>
		</>
	),
});
