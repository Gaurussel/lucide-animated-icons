import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, redraw, springy } from "../helpers.ts";

const sag = pose(
	{ y: [0, 0, 6, 0], rotate: [0, 0, 25, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "square-parking-off",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.35, 0.7))} style={centered}>
				<path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" />
				<path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" />
			</motion.g>
			<motion.path {...part(redraw(0, 0.45))} d="m2 2 20 20" />
			<motion.g {...part(sag)} style={pivot(9, 17)}>
				<path d="M13 13a3 3 0 1 0 0-6H9v2" />
				<path d="M9 17v-2.3" />
			</motion.g>
		</>
	),
});
