import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "eye-closed",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.4, 1] }, { duration: 0.5, delay: 0.2, times: [0, 0.4, 1] }))}
				style={edge(0.5, 0)}
			>
				<path d="m15 18-.722-3.25" />
				<path d="m9 18 .722-3.25" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.6, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				style={edge(0.5, 0)}
			>
				<path d="M2 8a10.645 10.645 0 0 0 20 0" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.4, 1] }, { duration: 0.5, delay: 0.05, times: [0, 0.4, 1] }))}
				style={edge(0.5, 0)}
			>
				<path d="m4 15 1.726-2.05" />
				<path d="m20 15-1.726-2.05" />
			</motion.g>
		</>
	),
});
