import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const flick = (degrees: number, delay: number) =>
	pose(
		{ rotate: [0, -degrees / 6, degrees, 0] },
		{ duration: 0.6, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
	);
const recoil = pose(
	{ rotate: [0, 0, 6, -4, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.3, 0.45, 1], ease: ["easeInOut", snap, "easeInOut", ring] },
);

export default createAnimatedIcon({
	name: "pocket-knife",
	render: (part) => (
		<motion.g {...part(recoil)} style={pivot(12, 12)}>
			<motion.path
				{...part(flick(-35, 0))}
				d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"
				style={pivot(4, 14)}
			/>
			<path d="M18 6h.01" />
			<path d="M6 18h.01" />
			<path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
			<motion.path {...part(flick(30, 0.12))} d="M18 11.66V22a4 4 0 0 0 4-4V6" style={pivot(20, 8)} />
		</motion.g>
	),
});
