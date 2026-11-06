import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const cherry = pose(
	{ y: [0, -3.6, 0, 0], rotate: [0, -7, -12.12, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.42, 1], ease: [snap, "easeIn", springy], reset: true },
);

export default createAnimatedIcon({
	name: "cake-slice",
	render: (part) => (
		<>
			<motion.circle {...part(cherry)} cx="9" cy="7" r="2" style={edge(0.5, 1)} />
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6" />
				<path d="M16 13H3" />
				<path d="M16 17H3" />
			</motion.g>
		</>
	),
});
