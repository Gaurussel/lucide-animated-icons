import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "egg-fried",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ scale: [1, 1.2, 1], y: [0, -1.5, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.4, 1] }),
				)}
				style={centered}
			>
				<circle cx="11.5" cy="12.5" r="3.5" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 1.07, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))} style={centered}>
				<path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
			</motion.g>
		</>
	),
});
