import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "factory",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.85, times: [0, 0.3, 0.6, 1] }))}>
				<motion.g
					{...part(pose({ scale: [1, 0, 1] }, { duration: 0.45, delay: 0.2, times: [0, 0.45, 1] }))}
					style={centered}
				>
					<path d="M12 16h.01" />
				</motion.g>
				<motion.g
					{...part(pose({ scale: [1, 0, 1] }, { duration: 0.45, delay: 0.35, times: [0, 0.45, 1] }))}
					style={centered}
				>
					<path d="M16 16h.01" />
				</motion.g>
				<motion.g
					{...part(pose({ scaleY: [1, 1, 0.88, 1] }, { duration: 0.85, times: [0, 0.4, 0.7, 1] }))}
					style={edge(0.5, 1)}
				>
					<path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
				</motion.g>
				<motion.g
					{...part(pose({ scale: [1, 0, 1] }, { duration: 0.45, delay: 0.05, times: [0, 0.45, 1] }))}
					style={centered}
				>
					<path d="M8 16h.01" />
				</motion.g>
			</motion.g>
		</>
	),
});
