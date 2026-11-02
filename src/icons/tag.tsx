import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const times = [0, 0.25, 0.55, 0.8, 1];

export default createAnimatedIcon({
	name: "tag",
	render: (part) => (
		<motion.g {...part(pose({ rotate: [0, -14, 9, -3, 0] }, { duration: 0.8, times }))} style={pivot(7.5, 7.5)}>
			<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
			<motion.circle
				{...part(pose({ scale: [1, 1, 2.2, 1, 1] }, { duration: 0.8, times }))}
				cx="7.5"
				cy="7.5"
				fill="currentColor"
				r=".5"
				style={centered}
			/>
		</motion.g>
	),
});
