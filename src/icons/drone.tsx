import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "drone",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M10 10 7 7" />
				<path d="m10 14-3 3" />
				<path d="m14 10 3-3" />
				<path d="m14 14 3 3" />
				<motion.g
					{...part(
						pose(
							{ rotate: [0, -15, 360] },
							{ duration: 0.65, delay: 0.1, times: [0, 0.15, 1], reset: true },
						),
					)}
					style={pivot(17, 7)}
				>
					<path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
				</motion.g>
				<motion.g
					{...part(
						pose(
							{ rotate: [0, -15, 360] },
							{ duration: 0.65, delay: 0.1, times: [0, 0.15, 1], reset: true },
						),
					)}
					style={pivot(17, 17)}
				>
					<path d="M19.637 14a4 4 0 1 1-5.432 5.868" />
				</motion.g>
				<motion.g
					{...part(
						pose(
							{ rotate: [0, -15, 360] },
							{ duration: 0.65, delay: 0.1, times: [0, 0.15, 1], reset: true },
						),
					)}
					style={pivot(7, 7)}
				>
					<path d="M4.367 10a4 4 0 1 1 5.438-5.862" />
				</motion.g>
				<motion.g
					{...part(
						pose(
							{ rotate: [0, -15, 360] },
							{ duration: 0.65, delay: 0.1, times: [0, 0.15, 1], reset: true },
						),
					)}
					style={pivot(7, 17)}
				>
					<path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
				</motion.g>
				<motion.g
					{...part(pose({ scaleY: [1, 1, 0.9, 1] }, { duration: 0.85, times: [0, 0.3, 0.6, 1] }))}
					style={centered}
				>
					<rect height="8" rx="1" width="4" x="10" y="8" />
				</motion.g>
			</motion.g>
		</>
	),
});
