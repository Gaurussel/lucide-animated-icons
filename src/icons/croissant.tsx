import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "croissant",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}>
				<motion.g
					{...part(pose({ scaleY: [1, 1, 0.94, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}
					style={edge(0.5, 1)}
				>
					<path d="m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" />
				</motion.g>
				<motion.g
					{...part(pose({ rotate: [0, 0, 10, 0] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
					style={pivot(10, 9.5)}
				>
					<path d="m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" />
					<path d="M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" />
				</motion.g>
				<motion.g
					{...part(pose({ rotate: [0, 0, 10, 0] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
					style={pivot(14, 13.5)}
				>
					<path d="m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" />
					<path d="M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" />
				</motion.g>
			</motion.g>
		</>
	),
});
