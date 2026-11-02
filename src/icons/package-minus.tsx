import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const toss = pose(
	{ x: [0, 6, -4, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.25, 0.26, 1], ease: ["easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "package-minus",
	render: (part) => (
		<>
			<motion.g {...part(leap)}>
				<motion.g {...part(jelly(0.44, 0.65))} style={edge(0.5, 1)}>
					<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
					<motion.path {...part(redraw(0.3, 0.4))} d="m7.5 4.27 9 5.15" />
					<polyline points="3.29 7 12 12 20.71 7" />
					<line x1="12" x2="12" y1="22" y2="12" />
				</motion.g>
			</motion.g>
			<motion.path {...part(toss)} d="M16 16h6" />
		</>
	),
});
