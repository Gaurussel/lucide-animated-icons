import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const aim = pose(
	{ y: [0, -1.2, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "video-off",
	render: (part) => (
		<>
			<motion.g {...part(aim)} style={pivot(9, 18)}>
				<path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" />
				<path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.55))} d="m2 2 20 20" />
		</>
	),
});
