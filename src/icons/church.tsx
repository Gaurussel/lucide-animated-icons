import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const cross = pose({ rotate: [0, -25, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", ring] });
const steeple = pose({ y: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "church",
	render: (part) => (
		<>
			<motion.g {...part(steeple)}>
				<motion.g {...part(cross)} style={pivot(12, 12)}>
					<path d="M10 9h4" />
					<path d="M12 7v5" />
				</motion.g>
				<path d="M14 22v-4a2 2 0 0 0-4 0v4" />
				<path d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22" />
			</motion.g>
			<path d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7" />
		</>
	),
});
