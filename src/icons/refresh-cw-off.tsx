import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "refresh-cw-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -22, 0, 0, 0, 0, 0], opacity: [1, 1, 1, 1, 0.45, 0.45, 1] },
						{ duration: 0.9, times: [0, 0.25, 0.5, 0.55, 0.7, 0.9, 1] },
					),
				)}
				style={centered}
			>
				<path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" />
				<path d="M8 16H3v5" />
				<path d="M3 12C3 9.51 4 7.26 5.64 5.64" />
				<path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" />
				<path d="M21 12c0 1-.16 1.97-.47 2.87" />
				<path d="M21 3v5h-5" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.12, 0.4, 0.75, 1] }))}
				d="M22 22 2 2"
			/>
		</>
	),
});
