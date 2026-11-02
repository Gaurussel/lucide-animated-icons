import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const boom = pose(
	{ x: [0, -1.5, 0], scale: [1, 1.2, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy] },
);
const fizzle = pose({ x: [0, 2, 0] }, { duration: 0.7, times: [0, 0.15, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "volume-off",
	render: (part) => (
		<>
			<motion.g {...part(fizzle)}>
				<path d="M16 9a5 5 0 0 1 .95 2.293" />
				<path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
			</motion.g>
			<motion.g {...part(boom)} style={pivot(11, 12)}>
				<path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
				<path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.55))} d="m2 2 20 20" />
		</>
	),
});
