import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const plant = pose(
	{ y: [0, -6, 1, 0], rotate: [0, -18, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "land-plot",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
				<path d="m6.49 12.85 11.02 6.3" />
				<path d="M17.51 12.85 6.5 19.15" />
			</motion.g>
			<motion.path {...part(plant)} d="m12 8 6-3-6-3v10" style={edge(0, 1)} />
		</>
	),
});
