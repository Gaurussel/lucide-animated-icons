import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const poke = pose(
	{ x: [0, 3, 0], y: [0, 3, 0], scale: [1, 0.8, 1] },
	{ duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "mouse-pointer-click",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.15, 0.35))} d="M7.2 2.2 8 5.1" />
			<motion.path {...part(redraw(0.2, 0.35))} d="M14 4.1 12 6" />
			<motion.path {...part(redraw(0.25, 0.35))} d="m5.1 8-2.9-.8" />
			<motion.path {...part(redraw(0.3, 0.35))} d="m6 12-1.9 2" />
			<motion.path
				{...part(poke)}
				d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
				style={pivot(9, 9)}
			/>
		</>
	),
});
