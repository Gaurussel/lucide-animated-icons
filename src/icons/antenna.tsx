import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const sway = pose(
	{ rotate: [0, 6, -12, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const prong = (delay: number) =>
	pose({ rotate: [0, -18, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "antenna",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(12, 22)}>
			<motion.path {...part(prong(0.1))} d="M2 12 7 2" style={pivot(2, 12)} />
			<motion.path {...part(prong(0.16))} d="m7 12 5-10" style={pivot(7, 12)} />
			<motion.path {...part(prong(0.22))} d="m12 12 5-10" style={pivot(12, 12)} />
			<motion.path {...part(prong(0.28))} d="m17 12 5-10" style={pivot(17, 12)} />
			<motion.path {...part(redraw(0.05, 0.4))} d="M4.5 7h15" />
			<path d="M12 16v6" />
		</motion.g>
	),
});
