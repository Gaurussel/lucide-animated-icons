import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tree-palm",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -9, 7.2, -3.6, 0] }, { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] }))}
				style={pivot(11, 21)}
			>
				<motion.path
					{...part(pose({ rotate: [0, -14, -14, 0] }, { duration: 0.85, times: [0, 0.3, 0.6, 1] }))}
					d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"
					style={pivot(13, 8)}
				/>
				<motion.path
					{...part(pose({ rotate: [0, 14, 14, 0] }, { duration: 0.85, times: [0, 0.3, 0.6, 1] }))}
					d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"
					style={pivot(13, 7.14)}
				/>
				<path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
			</motion.g>
			<path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
		</>
	),
});
