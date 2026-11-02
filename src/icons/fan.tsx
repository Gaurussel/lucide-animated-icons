import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "fan",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -15, 360] }, { duration: 0.8, times: [0, 0.2, 1], reset: true }))}
				style={pivot(12, 12)}
			>
				<path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 0.5, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))} style={centered}>
				<path d="M12 12v.01" />
			</motion.g>
		</>
	),
});
