import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const raise = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 4, -10, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const flap = (degrees: number) =>
	pose({ rotate: [0, 0, degrees, 0] }, { duration: 0.72, times: [0, 0.26, 0.4, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "trophy",
	render: (part) => (
		<>
			<motion.g {...part(raise)} style={pivot(12, 22)}>
				<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
				<path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
				<motion.path {...part(flap(30))} d="M18 9h1.5a1 1 0 0 0 0-5H18" style={pivot(18, 6.5)} />
				<path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
				<motion.path {...part(flap(-30))} d="M6 9H4.5a1 1 0 0 1 0-5H6" style={pivot(6, 6.5)} />
			</motion.g>
			<motion.path {...part(redraw(0.3, 0.4))} d="M4 22h16" />
		</>
	),
});
