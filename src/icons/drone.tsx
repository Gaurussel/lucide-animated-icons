import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -3, 0], rotate: [0, -4.8, 0] },
	{ duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] },
);
const rotor = pose(
	{ rotate: [0, 0, 0] },
	{ duration: 0.75, times: [0, 0.05, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "drone",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 12)}>
			<path d="M10 10 7 7" />
			<path d="m10 14-3 3" />
			<path d="m14 10 3-3" />
			<path d="m14 14 3 3" />
			<rect height="8" rx="1" width="4" x="10" y="8" />
			<motion.path {...part(rotor)} d="M14.205 4.139a4 4 0 1 1 5.439 5.863" style={pivot(16.92, 7.07)} />
			<motion.path {...part(rotor)} d="M19.637 14a4 4 0 1 1-5.432 5.868" style={pivot(16.92, 16.93)} />
			<motion.path {...part(rotor)} d="M4.367 10a4 4 0 1 1 5.438-5.862" style={pivot(7.09, 7.07)} />
			<motion.path {...part(rotor)} d="M9.795 19.862a4 4 0 1 1-5.429-5.873" style={pivot(7.08, 16.93)} />
		</motion.g>
	),
});
