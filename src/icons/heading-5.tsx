import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const bob = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "heading-5",
	render: (part) => (
		<>
			<motion.g {...part(bob)} style={pivot(4, 18)}>
				<path d="M4 12h8" />
				<path d="M4 18V6" />
				<path d="M12 18V6" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.35))} d="M17 13v-3h4" />
			<motion.path
				{...part(redraw(0.2, 0.45))}
				d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"
			/>
		</>
	),
});
