import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const boom = pose(
	{ x: [0, -1.5, 0], scale: [1, 1.2, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy] },
);

const wave = (delay: number) =>
	pose({ x: [0, 3, 0] }, { duration: 0.6, delay, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "volume-1",
	render: (part) => (
		<>
			<motion.path
				{...part(boom)}
				d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
				style={pivot(11, 12)}
			/>
			<motion.g {...part(wave(0.05))}>
				<motion.path {...part(redraw(0.05, 0.4))} d="M16 9a5 5 0 0 1 0 6" />
			</motion.g>
		</>
	),
});
