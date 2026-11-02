import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const rings = pose({ y: [0, -3, 0] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });
const head = pose(
	{ y: [0, 1, -4, 0] },
	{ duration: 0.65, delay: 0.08, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "contact-round",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.45, 0.75))} height="18" rx="2" style={edge(0.5, 1)} width="18" x="3" y="4" />
			<motion.g {...part(rings)}>
				<path d="M16 2v2" />
				<path d="M8 2v2" />
			</motion.g>
			<motion.circle {...part(head)} cx="12" cy="12" r="4" />
			<motion.path {...part(redraw(0.18, 0.4))} d="M17.915 22a6 6 0 0 0-12 0" />
		</>
	),
});
