import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const twistEnd = (degrees: number) =>
	pose({ rotate: [0, degrees, 0] }, { duration: 0.6, times: [0, 0.2, 1], ease: [snap, ring] });
const dodge = pose(
	{ x: [0, 0, -2.5, 0], y: [0, 0, 2.5, 0], rotate: [0, -20, -30, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.4, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "candy-off",
	render: (part) => (
		<>
			<motion.g {...part(dodge)} style={centered}>
				<path d="M10 10v7.9" />
				<path d="M11.802 6.145a5 5 0 0 1 6.053 6.053" />
				<path d="M14 6.1v2.243" />
				<path d="m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" />
				<motion.path
					{...part(twistEnd(-30))}
					d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"
					style={pivot(16.5, 7.5)}
				/>
				<motion.path
					{...part(twistEnd(-30))}
					d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
					style={pivot(7.5, 16.5)}
				/>
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.4))} d="m2 2 20 20" />
		</>
	),
});
