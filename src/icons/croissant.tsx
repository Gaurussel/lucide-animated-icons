import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, rubber } from "../helpers.ts";

const toss = pose(
	{ y: [0, 0.6, -3, 0], rotate: [0, 2.4, -12, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", rubber] },
);
const tip = (degrees: number) =>
	pose(
		{ rotate: [0, 0, degrees, 0] },
		{ duration: 0.7, delay: 0.08, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", "easeOut", ring] },
	);

export default createAnimatedIcon({
	name: "croissant",
	render: (part) => (
		<motion.g {...part(toss)} style={pivot(12, 12)}>
			<path d="m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" />
			<path d="m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" />
			<path d="m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" />
			<motion.path {...part(tip(-25))} d="M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" style={pivot(6, 6)} />
			<motion.path {...part(tip(25))} d="M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" style={pivot(18, 18)} />
		</motion.g>
	),
});
