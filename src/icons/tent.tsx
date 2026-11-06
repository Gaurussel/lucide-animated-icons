import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const pole = (direction: number, delay: number) =>
	pose(
		{ rotate: [0, -3 * direction, 8 * direction, 0] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", snap, ring] },
	);
const flap = pose(
	{ x: [0, 0, 0.9, 0] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "tent",
	render: (part) => (
		<>
			<motion.path {...part(pole(-1, 0))} d="M3.5 21 14 3" style={pivot(3.5, 21)} />
			<motion.path {...part(pole(1, 0.08))} d="M20.5 21 10 3" style={pivot(20.5, 21)} />
			<motion.g {...part(flap)}>
				<motion.path {...part(redraw(0.12, 0.45))} d="M15.5 21 12 15l-3.5 6" />
			</motion.g>
			<path d="M2 21h20" />
		</>
	),
});
