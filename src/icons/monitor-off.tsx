import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-off",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
				<path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
				<path d="M22 15V5a2 2 0 0 0-2-2H9" />
				<path d="M8 21h8" />
				<path d="M12 17v4" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.35, 0.55, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
