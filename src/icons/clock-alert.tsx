import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const sweep = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

const alarm = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.12, 1], ease: [snap, ring] });
const bang = pose({ y: [0, -4, 0] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "clock-alert",
	render: (part) => (
		<>
			<motion.g {...part(alarm)} style={pivot(12, 12)}>
				<motion.path {...part(sweep)} d="M12 6v6l4 2" style={pivot(12, 12)} />
				<path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
			</motion.g>
			<motion.g {...part(bang)}>
				<path d="M20 12v5" />
				<path d="M20 21h.01" />
			</motion.g>
		</>
	),
});
