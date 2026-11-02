import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "server-crash",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ x: [0, -1, 1, -1, 0.6, 0, 0] }, { duration: 0.8, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1] }),
				)}
			>
				<path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
				<motion.path
					{...part(pose({ opacity: [1, 1, 0.2, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.4, 0.55, 1] }))}
					d="M6 6h.01"
				/>
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, 1, -1, 1, -0.6, 0, 0] },
						{ duration: 0.8, times: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 1] },
					),
				)}
			>
				<path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
				<motion.path
					{...part(pose({ opacity: [1, 1, 0.2, 1, 1] }, { duration: 0.8, times: [0, 0.45, 0.55, 0.7, 1] }))}
					d="M6 18h.01"
				/>
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, -0.8, -1, 0.6, 1, 0.6, 0, 0, 0], opacity: [1, 1, 0, 0.2, 1, 0.75, 0, 0.643, 1, 1] },
						{ duration: 0.8, times: [0, 0.1, 0.18, 0.2, 0.28, 0.3, 0.36, 0.45, 0.5, 1] },
					),
				)}
				d="m13 6-4 6h6l-4 6"
			/>
		</>
	),
});
