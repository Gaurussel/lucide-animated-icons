import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const knock = pose(
	{ rotate: [0, 3.6, -7.2, 0] },
	{ duration: 0.75, times: [0, 0.1, 0.22, 1], ease: ["easeInOut", snap, ring] },
);
const dial = pose(
	{ rotate: [0, 4.79, 0] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const flag = pose(
	{ y: [0, 0, -1.8, 0] },
	{ duration: 0.75, times: [0, 0.32, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "parking-meter",
	render: (part) => (
		<>
			<motion.g {...part(knock)} style={pivot(12, 19)}>
				<motion.g {...part(flag)}>
					<path d="M11 15h2" />
					<path d="M12 12v3" />
				</motion.g>
				<path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" />
				<motion.path {...part(dial)} d="M9 9a3 3 0 1 1 6 0" style={pivot(12, 9)} />
			</motion.g>
			<path d="M12 19v3" />
		</>
	),
});
