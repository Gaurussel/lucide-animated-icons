import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flask-conical",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, 6, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
			<motion.path
				{...part(pose({ rotate: [0, 8, -6, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M6.453 15h11.094"
				style={pivot(12, 15)}
			/>
			<path d="M8.5 2h7" />
		</motion.g>
	),
});
