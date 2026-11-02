import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "venetian-mask",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -7, -7, 0] }, { duration: 0.85, times: [0, 0.25, 0.6, 1] }))}
				style={pivot(12, 12)}
			>
				<motion.path
					{...part(pose({ y: [0, -1.4, -1.4, 0] }, { duration: 0.85, times: [0, 0.25, 0.6, 1] }))}
					d="M18 11c-1.5 0-2.5.5-3 2"
				/>
				<motion.path
					{...part(
						pose({ y: [0, -1.4, -1.4, 0] }, { duration: 0.85, delay: 0.08, times: [0, 0.25, 0.6, 1] }),
					)}
					d="M6 11c1.5 0 2.5.5 3 2"
				/>
				<path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
			</motion.g>
		</>
	),
});
