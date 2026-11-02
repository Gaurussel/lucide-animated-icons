import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const swirl = pose(
	{ rotate: [0, -8, 22, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const slosh = pose(
	{ rotate: [0, 0, -40, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", snap, ring] },
);
const cork = pose(
	{ y: [0, 0, -4, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "flask-conical-off",
	render: (part) => (
		<>
			<motion.g {...part(swirl)} style={pivot(12, 2)}>
				<path d="M10 2v2.343" />
				<path d="M14 2v6.343" />
				<path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" />
				<motion.path {...part(slosh)} d="M6.453 15H15" style={pivot(11, 15)} />
				<motion.path {...part(cork)} d="M8.5 2h7" />
			</motion.g>
			<motion.path {...part(redraw(0.3, 0.4))} d="m2 2 20 20" />
		</>
	),
});
