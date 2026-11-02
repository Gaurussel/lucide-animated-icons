import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tram-front",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 0.8, 0, 0.8, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}>
				<motion.g
					{...part(
						pose({ opacity: [1, 0.15, 1, 0.15, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1] }),
					)}
				>
					<path d="M8 15h.01" />
					<path d="M16 15h.01" />
				</motion.g>
				<rect height="16" rx="2" width="16" x="4" y="3" />
				<path d="M4 11h16" />
				<path d="M12 3v8" />
				<motion.path
					{...part(pose({ rotate: [0, 10, 0] }, { duration: 0.7, times: [0, 0.5, 1] }))}
					d="m8 19-2 3"
					style={pivot(8, 19)}
				/>
				<motion.path
					{...part(pose({ rotate: [0, -10, 0] }, { duration: 0.7, times: [0, 0.5, 1] }))}
					d="m18 22-2-3"
					style={pivot(16, 19)}
				/>
			</motion.g>
		</>
	),
});
