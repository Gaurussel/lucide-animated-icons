import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, rubber, snap } from "../helpers.ts";

const crawl = pose({ x: [0, 2.4, 0] }, { duration: 0.75, times: [0, 0.35, 1], ease: ["easeInOut", rubber] });
const shell = pose({ rotate: [0, -12, 0] }, { duration: 0.75, times: [0, 0.35, 1], ease: ["easeInOut", rubber] });
const feel = (direction: number) =>
	pose({ rotate: [0, 25 * direction, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "snail",
	render: (part) => (
		<motion.g {...part(crawl)}>
			<motion.g {...part(shell)} style={pivot(10, 13)}>
				<path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
				<circle cx="10" cy="13" r="8" />
			</motion.g>
			<path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
			<motion.path {...part(feel(-1))} d="M18 3 19.1 5.2" style={pivot(19.1, 5.2)} />
			<motion.path {...part(feel(1))} d="M22 3 20.9 5.2" style={pivot(20.9, 5.2)} />
		</motion.g>
	),
});
