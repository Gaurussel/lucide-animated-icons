import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const sway = pose(
	{ rotate: [0, 8, -14, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const twirl = pose(
	{ rotate: [0, 0, 360] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const leaf = (direction: number, delay: number) =>
	pose({ rotate: [0, 26 * direction, 0] }, { duration: 0.6, delay, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "flower-2",
	render: (part) => (
		<>
			<motion.g {...part(sway)} style={pivot(12, 22)}>
				<motion.g {...part(twirl)} style={pivot(12, 8)}>
					<motion.path
						{...part(redraw(0.1, 0.5))}
						d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
					/>
					<circle cx="12" cy="8" r="2" />
				</motion.g>
				<path d="M12 10v12" />
			</motion.g>
			<motion.path
				{...part(leaf(-1, 0.12))}
				d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
				style={pivot(12, 22)}
			/>
			<motion.path
				{...part(leaf(1, 0.2))}
				d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
				style={pivot(12, 22)}
			/>
		</>
	),
});
