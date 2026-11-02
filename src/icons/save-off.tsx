import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "save-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scaleY: [1, 0.93, 0.988, 1, 1, 1, 1], opacity: [1, 1, 1, 0.833, 0.5, 0.5, 1] },
						{ duration: 0.85, times: [0, 0.3, 0.55, 0.6, 0.7, 0.85, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<path d="M13 13H8a1 1 0 0 0-1 1v7" />
				<path d="M14 8h1" />
				<path d="M17 21v-4" />
				<path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" />
				<path d="M29.5 11.5s5 5 4 5" />
				<path d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.85, times: [0, 0.12, 0.35, 0.75, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
