import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tablet-smartphone",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, 0, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}>
				<rect height="14" rx="2" width="10" x="3" y="8" />
				<path d="M8 18h.01" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.94, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
				style={centered}
			/>
		</>
	),
});
