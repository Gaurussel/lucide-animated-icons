import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const twirl = pose({ rotate: [0, -20, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });
const open = pose({ y: [0, -2.5, 0] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "umbrella",
	render: (part) => (
		<motion.g {...part(twirl)} style={pivot(14, 21)}>
			<motion.g {...part(open)}>
				<path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
				<path d="M12 2v1" />
			</motion.g>
			<path d="M12 12v8a2 2 0 0 0 4 0" />
		</motion.g>
	),
});
