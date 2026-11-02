import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const whirl = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const pulse = pose({ scale: [1, 0.7, 1] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "loader",
	render: (part) => (
		<motion.g {...part(pulse)} style={centered}>
			<motion.g {...part(whirl)} style={centered}>
				<path d="M12 2v4" />
				<path d="m16.2 7.8 2.9-2.9" />
				<path d="M18 12h4" />
				<path d="m16.2 16.2 2.9 2.9" />
				<path d="M12 18v4" />
				<path d="m4.9 19.1 2.9-2.9" />
				<path d="M2 12h4" />
				<path d="m4.9 4.9 2.9 2.9" />
			</motion.g>
		</motion.g>
	),
});
