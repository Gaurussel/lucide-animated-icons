import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const set = pose(
	{ y: [0, -1.2, 5.4, -4.8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const sink = pose(
	{ y: [0, 0, 1.5, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "sunset",
	render: (part) => (
		<>
			<motion.g {...part(set)}>
				<path d="M12 10V2" />
				<path d="m16 6-4 4-4-4" />
			</motion.g>
			<motion.g {...part(sink)}>
				<path d="M16 18a4 4 0 0 0-8 0" />
				<path d="m4.93 10.93 1.41 1.41" />
				<path d="M2 18h2" />
				<path d="M20 18h2" />
				<path d="m19.07 10.93-1.41 1.41" />
			</motion.g>
			<path d="M22 22H2" />
		</>
	),
});
