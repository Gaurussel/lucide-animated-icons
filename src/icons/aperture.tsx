import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, -20, 360] },
	{ duration: 0.72, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const close = pose(
	{ scale: [1, 1, 0.5, 1] },
	{ duration: 0.72, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const click = pose(
	{ scale: [1, 1, 1.1, 1] },
	{ duration: 0.72, times: [0, 0.38, 0.46, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "aperture",
	render: (part) => (
		<>
			<motion.circle {...part(click)} cx="12" cy="12" r="10" style={centered} />
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<motion.g {...part(close)} style={pivot(12, 12)}>
					<path d="m14.31 8 5.74 9.94" />
					<path d="M9.69 8h11.48" />
					<path d="m7.38 12 5.74-9.94" />
					<path d="M9.69 16 3.95 6.06" />
					<path d="M14.31 16H2.83" />
					<path d="m16.62 12-5.74 9.94" />
				</motion.g>
			</motion.g>
		</>
	),
});
