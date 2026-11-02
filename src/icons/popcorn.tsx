import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const pop = pose({ y: [0, -5, 0], rotate: [0, -10, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "popcorn",
	render: (part) => (
		<>
			<motion.path
				{...part(pop)}
				d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(jelly(0.25, 0.65))} style={edge(0.5, 1)}>
				<path d="M10 22 9 8" />
				<path d="m14 22 1-14" />
				<path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
			</motion.g>
		</>
	),
});
