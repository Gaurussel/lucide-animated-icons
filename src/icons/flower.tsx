import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const bloom = pose(
	{ scale: [1, 0.7, 1], rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const bud = pose({ scale: [1, 1.5, 1] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "flower",
	render: (part) => (
		<>
			<motion.circle {...part(bud)} cx="12" cy="12" r="3" style={centered} />
			<motion.path
				{...part(bloom)}
				d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
				style={pivot(12, 12)}
			/>
			<motion.g {...part(redraw(0.2, 0.45))}>
				<path d="M12 7.5V9" />
				<path d="M7.5 12H9" />
				<path d="M16.5 12H15" />
				<path d="M12 16.5V15" />
				<path d="m8 8 1.88 1.88" />
				<path d="M14.12 9.88 16 8" />
				<path d="m8 16 1.88-1.88" />
				<path d="M14.12 14.12 16 16" />
			</motion.g>
		</>
	),
});
