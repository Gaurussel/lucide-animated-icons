import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const cloche = pose(
	{ y: [0, -5, 0], rotate: [0, -18, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

const body = pose({ y: [0, 2, 0], rotate: [0, 6, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "hand-platter",
	render: (part) => (
		<motion.g {...part(body)} style={pivot(2, 14)}>
			<motion.g {...part(cloche)} style={pivot(5, 10)}>
				<path d="M12 3V2" />
				<path d="M5 10a7 7 0 0 1 14 0" />
			</motion.g>
			<motion.path {...part(jelly(0.38, 0.7))} d="M4 10h16" style={edge(0.5, 1)} />
			<path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" />
			<path d="M2 14h12a2 2 0 0 1 0 4h-2" />
			<path d="M5 14v6a1 1 0 0 1-1 1H2" />
		</motion.g>
	),
});
