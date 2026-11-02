import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-chart-pie",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5" />
			<motion.path
				{...part(pose({ scale: [1, 1, 0.94, 0.94, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="M4.017 11.512a6 6 0 1 0 8.466 8.475"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 1.2, 1.2, 0], y: [0, 0, -1.2, -1.2, 0] },
						{ duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] },
					),
				)}
				d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"
			/>
		</motion.g>
	),
});
