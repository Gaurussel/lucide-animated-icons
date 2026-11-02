import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bug-off",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1, 0, -1, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}>
				<path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
				<path d="M14.12 3.88 16 2" />
				<path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" />
				<path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
				<path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
				<path d="M12 20v-8" />
				<motion.path
					{...part(pose({ rotate: [0, 12, -12, 8, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
					d="M6 13H2"
					style={pivot(6, 13)}
				/>
				<path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.85] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
