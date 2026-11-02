import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "amphora",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -9, -9, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}
				style={pivot(12, 22)}
			>
				<path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" />
				<path d="M10 5H8a2 2 0 0 0 0 4h.68" />
				<path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
				<path d="M14 5h2a2 2 0 0 1 0 4h-.68" />
			</motion.g>
			<path d="M18 22H6" />
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.25, 0.7, 1] }))}
				d="M9 2h6"
			/>
		</>
	),
});
