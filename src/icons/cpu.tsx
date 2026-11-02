import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cpu",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 0] }, { duration: 0.6, delay: 0.2, times: [0, 0.4, 1] }))}>
				<path d="M12 20v2" />
				<path d="M17 20v2" />
				<path d="M7 20v2" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1.5, 0] }, { duration: 0.6, times: [0, 0.4, 1] }))}>
				<path d="M12 2v2" />
				<path d="M17 2v2" />
				<path d="M7 2v2" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 1.5, 0] }, { duration: 0.6, delay: 0.3, times: [0, 0.4, 1] }))}>
				<path d="M2 12h2" />
				<path d="M2 17h2" />
				<path d="M2 7h2" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1.5, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.4, 1] }))}>
				<path d="M20 12h2" />
				<path d="M20 17h2" />
				<path d="M20 7h2" />
			</motion.g>
			<rect height="16" rx="2" width="16" x="4" y="4" />
			<motion.g
				{...part(pose({ scale: [1, 1, 0.6, 1] }, { duration: 0.9, times: [0, 0.4, 0.65, 1] }))}
				style={centered}
			>
				<rect height="8" rx="1" width="8" x="8" y="8" />
			</motion.g>
		</>
	),
});
