import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const strike = pose(
	{ rotate: [0, 8, -9, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.28, 1], ease: ["easeInOut", snap, springy] },
);
const struck = pose(
	{ rotate: [0, 0, 14, 0] },
	{ duration: 0.7, times: [0, 0.26, 0.38, 1], ease: ["easeInOut", snap, ring] },
);
const slosh = (degrees: number, at: number) =>
	pose(
		{ rotate: [0, 0, degrees, 0] },
		{ duration: 0.7, times: [0, at, at + 0.14, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "test-tubes",
	render: (part) => (
		<>
			<motion.g {...part(strike)} style={pivot(6.5, 2)}>
				<path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" />
				<path d="M3 2h7" />
				<motion.path {...part(slosh(20, 0.2))} d="M9 16H4" style={pivot(6.5, 16)} />
			</motion.g>
			<motion.g {...part(struck)} style={pivot(17.5, 2)}>
				<path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" />
				<path d="M14 2h7" />
				<motion.path {...part(slosh(-24, 0.34))} d="M20 16h-5" style={pivot(17.5, 16)} />
			</motion.g>
		</>
	),
});
