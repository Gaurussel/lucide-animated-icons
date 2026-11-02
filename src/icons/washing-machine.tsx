import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "washing-machine",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, -0.6, 0.6, -0.6, 0.6, 0] }, { duration: 0.8 }))}>
			<path d="M3 6h3" />
			<motion.path {...part(pose({ scale: [1, 2, 1] }, { duration: 0.4 }))} d="M17 6h.01" style={centered} />
			<rect height="20" rx="2" width="18" x="3" y="2" />
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))} style={centered}>
				<circle cx="12" cy="13" r="5" />
				<path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
			</motion.g>
		</motion.g>
	),
});
