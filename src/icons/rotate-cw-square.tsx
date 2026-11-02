import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rotate-cw-square",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
				style={centered}
			/>
			<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M12 5H6a2 2 0 0 0-2 2v3" />
				<path d="m9 8 3-3-3-3" />
			</motion.g>
		</>
	),
});
