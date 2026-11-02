import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "database-backup",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.85, times: [0, 0.25, 0.7, 1] }))}>
				<ellipse cx="12" cy="5" rx="9" ry="3" />
				<path d="M21 9.3V5" />
			</motion.g>
			<path d="M3 12a9 3 0 0 0 5 2.69" />
			<path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
			<motion.g
				{...part(pose({ rotate: [0, 20, -360] }, { duration: 0.85, times: [0, 0.2, 1], reset: true }))}
				style={pivot(17.5, 17)}
			>
				<path d="M12 12v4h4" />
				<path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
			</motion.g>
		</>
	),
});
