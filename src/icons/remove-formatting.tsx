import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "remove-formatting",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ y: [0, 0, 1, 1, 0], opacity: [1, 1, 0.35, 0.35, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.55, 0.8, 1] },
					),
				)}
			>
				<path d="M4 7V4h16v3" />
				<path d="M5 20h6" />
				<path d="M13 4 8 20" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.15, 0.3, 0.55, 1] }))}
				d="m15 15 5 5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="m20 15-5 5"
			/>
		</>
	),
});
