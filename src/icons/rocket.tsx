import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, springy } from "../helpers.ts";

const launch = pose(
	{ x: [0, -2, 12, -10, 0], y: [0, 2, -12, 10, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.18, 0.4, 0.41, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const flame = pose(
	{ scale: [1, 1.5, 1, 1] },
	{ duration: 0.7, times: [0, 0.18, 0.4, 1], ease: ["easeInOut", "easeIn", "easeInOut"] },
);

export default createAnimatedIcon({
	name: "rocket",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.g {...part(launch)}>
				<motion.path
					{...part(flame)}
					d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
					style={pivot(7, 17)}
				/>
				<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
				<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
				<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
			</motion.g>
		</motion.g>
	),
});
