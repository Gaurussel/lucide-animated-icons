import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "decimals-arrow-left",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, -3, 0] }, { duration: 0.75, times: [0, 0.2, 0.55, 1] }))}>
				<path d="m13 21-3-3 3-3" />
				<path d="M20 18H10" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 0, -2, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M3 11h.01" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 0, -2, 0] }, { duration: 0.75, times: [0, 0.35, 0.65, 1] }))}>
				<rect height="8" rx="2.5" width="5" x="6" y="3" />
			</motion.g>
		</>
	),
});
