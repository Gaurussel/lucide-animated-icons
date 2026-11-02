import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "beer-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -9, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(11, 22)}
			>
				<path d="M13 13v5" />
				<path d="M17 11.47V8" />
				<path d="M17 11h1a3 3 0 0 1 2.745 4.211" />
				<path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" />
				<path d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" />
				<path d="M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" />
				<path d="M9 14.6V18" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
