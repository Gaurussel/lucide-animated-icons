import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "spade",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.15, 1, 1] }, { duration: 0.8, times: [0, 0.4, 0.8, 1] }))}
				style={centered}
			>
				<path d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 0, 1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
				<path d="M12 18v4" />
			</motion.g>
		</>
	),
});
