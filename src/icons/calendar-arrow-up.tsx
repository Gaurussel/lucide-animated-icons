import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const tilt = pose({ rotate: [0, -8, -8, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] });
const ring = (delay: number) => pose({ y: [0, -3, 0] }, { duration: 0.4, delay, times: [0, 0.45, 1] });
const flip = pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.15, times: [0, 0.35, 1] });

export default createAnimatedIcon({
	name: "calendar-arrow-up",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 22)}>
			<motion.path {...part(ring(0))} d="M8 2v4" />
			<motion.path {...part(ring(0.08))} d="M16 2v4" />
			<path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" />
			<motion.path {...part(flip)} d="M3 10h18" />
			<motion.g
				{...part(
					pose(
						{ y: [0, 1.5, -6, 6, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="m14 18 4-4 4 4" />
				<path d="M18 22v-8" />
			</motion.g>
		</motion.g>
	),
});
