import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const sway = pose(
	{ rotate: [0, 6, -16, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.28, 1], ease: ["easeInOut", snap, ring] },
);
const lag = pose(
	{ rotate: [0, 0, 18, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", snap, ring] },
);
const flip = pose(
	{ scaleX: [1, 1, -1, 1] },
	{ duration: 0.75, times: [0, 0.2, 0.42, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "medal",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(12, 2)}>
			<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
			<path d="M11 12 5.12 2.2" />
			<path d="m13 12 5.88-9.8" />
			<path d="M8 7h8" />
			<motion.g {...part(lag)} style={pivot(12, 12)}>
				<motion.g {...part(flip)} style={pivot(12, 17)}>
					<circle cx="12" cy="17" r="5" />
					<path d="M12 18v-2h-.5" />
				</motion.g>
			</motion.g>
		</motion.g>
	),
});
