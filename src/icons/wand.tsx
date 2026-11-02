import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const spark = pose({ scale: [1, 1, 0.2, 1], rotate: [0, 0, 45, 0] }, { duration: 0.85, times: [0, 0.45, 0.7, 1] });

export default createAnimatedIcon({
	name: "wand",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, 8, -16, 0] }, { duration: 0.85, times: [0, 0.2, 0.5, 1] }))}
				d="m3 21 9-9"
				style={pivot(3, 21)}
			/>
			<motion.g {...part(spark)} style={pivot(15, 9)}>
				<path d="M15 4V2" />
				<path d="M15 16v-2" />
				<path d="M8 9h2" />
				<path d="M20 9h2" />
				<path d="M17.8 11.8 19 13" />
				<path d="M15 9h.01" />
				<path d="M17.8 6.2 19 5" />
				<path d="M12.2 6.2 11 5" />
			</motion.g>
		</>
	),
});
