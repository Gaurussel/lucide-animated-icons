import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const spin = pose(
	{ rotate: [0, 3.62, 0] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const burst = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const core = pose({ scale: [1, 2.2, 1] }, { duration: 0.5, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "radiation",
	render: (part) => (
		<>
			<motion.path {...part(core)} d="M12 12h.01" style={pivot(12, 12)} />
			<motion.g {...part(spin)} style={pivot(12, 12)}>
				<motion.path
					{...part(burst(0, 2.5, 0.08))}
					d="M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z"
				/>
				<motion.path
					{...part(burst(2.2, -1.25, 0.14))}
					d="M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z"
				/>
				<motion.path
					{...part(burst(-2.2, -1.25, 0.2))}
					d="M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"
				/>
			</motion.g>
		</>
	),
});
