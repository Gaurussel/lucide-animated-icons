import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const focus = pose(
	{ y: [0, -2.4, 0.6, 0], rotate: [0, -7.2, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "microscope",
	render: (part) => (
		<>
			<motion.g {...part(focus)} style={pivot(10, 14)}>
				<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
				<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
				<path d="M9 14h2" />
			</motion.g>
			<path d="M14 22a7 7 0 1 0 0-14h-1" />
			<motion.path {...part(jelly(0.42, 0.7))} d="M6 18h8" style={edge(0.5, 1)} />
			<path d="M3 22h18" />
		</>
	),
});
