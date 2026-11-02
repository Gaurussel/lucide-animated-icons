import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-down-to-dot",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 2.5, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M12 2v14" />
				<path d="m19 9-7 7-7-7" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.7, 1] }, { duration: 0.75, times: [0, 0.35, 0.65, 1] }))}
				cx="12"
				cy="21"
				r="1"
				style={centered}
			/>
		</>
	),
});
