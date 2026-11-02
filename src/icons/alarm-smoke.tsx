import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "alarm-smoke",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.5, times: [0, 0.4, 0.41, 1] }),
				)}
				d="M11 21c0-2.5 2-2.5 2-5"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.12, times: [0, 0.4, 0.41, 1] },
					),
				)}
				d="M16 21c0-2.5 2-2.5 2-5"
			/>
			<motion.g {...part(pose({ y: [0, 1, 0] }, { duration: 0.8, times: [0, 0.3, 1] }))}>
				<path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" />
				<path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.24, times: [0, 0.4, 0.41, 1] },
					),
				)}
				d="M6 21c0-2.5 2-2.5 2-5"
			/>
		</>
	),
});
