import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flask-round",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, 6, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<path d="M10 2v6.292a7 7 0 1 0 4 0V2" />
			<motion.path
				{...part(pose({ rotate: [0, 8, -6, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M5 15h14"
				style={pivot(12, 15)}
			/>
			<path d="M8.5 2h7" />
		</motion.g>
	),
});
