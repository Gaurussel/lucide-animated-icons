import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const lid = pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] });

export default createAnimatedIcon({
	name: "archive-restore",
	render: (part) => (
		<>
			<motion.g {...part(lid)} style={pivot(2, 8)}>
				<rect height="5" rx="1" width="20" x="2" y="3" />
			</motion.g>
			<path d="M4 8v11a2 2 0 0 0 2 2h2" />
			<path d="M20 8v11a2 2 0 0 1-2 2h-2" />
			<motion.g {...part(pose({ y: [0, 1.5, -5, -5, 0] }, { duration: 0.7, times: [0, 0.15, 0.4, 0.55, 1] }))}>
				<path d="m9 15 3-3 3 3" />
				<path d="M12 12v9" />
			</motion.g>
		</>
	),
});
