import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const drift = pose(
	{ x: [0, 1.2, 0], y: [0, -1.2, 0], rotate: [0, 18, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "satellite",
	render: (part) => (
		<>
			<motion.g {...part(drift)} style={pivot(13.5, 10.5)}>
				<path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5" />
				<path d="M16.5 7.5 19 5" />
				<path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5" />
				<path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" />
			</motion.g>
			<motion.path {...part(redraw(0.2, 0.45))} d="M9 21a6 6 0 0 0-6-6" />
		</>
	),
});
