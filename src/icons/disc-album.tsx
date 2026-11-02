import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "disc-album",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -0.8, -0.8, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}>
				<rect height="18" rx="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 3, 3, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}>
				<circle cx="12" cy="12" r="5" />
				<path d="M12 12h.01" />
			</motion.g>
		</>
	),
});
