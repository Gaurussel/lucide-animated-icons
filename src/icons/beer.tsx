import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "beer",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -9, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(11, 22)}
			>
				<path d="M17 11h1a3 3 0 0 1 0 6h-1" />
				<path d="M9 12v6" />
				<path d="M13 12v6" />
				<path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
			/>
		</>
	),
});
