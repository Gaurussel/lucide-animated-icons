import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "server-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, 2, 0, 1.2, 0.6, 0, 0, 0, 0], opacity: [1, 1, 1, 1, 1, 0.633, 0.45, 0.45, 1] },
						{ duration: 0.9, times: [0, 0.15, 0.3, 0.45, 0.55, 0.65, 0.7, 0.85, 1] },
					),
				)}
			>
				<path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
				<path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
				<path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
				<path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
				<path d="M6 18h.01" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.12, 0.4, 0.8, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
