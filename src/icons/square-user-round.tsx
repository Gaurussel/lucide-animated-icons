import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, ring, snap, springy } from "../helpers.ts";

const peek = pose(
	{ y: [0, 1, -3, 0] },
	{ duration: 0.62, delay: 0.1, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const tilt = pose(
	{ x: [0, 0, -1.5, 0] },
	{ duration: 0.6, delay: 0.15, times: [0, 0.4, 0.55, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-user-round",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.4))} d="M18 21a6 6 0 0 0-12 0" />
			<motion.g {...part(tilt)}>
				<motion.circle {...part(peek)} cx="12" cy="11" r="4" />
			</motion.g>
			<motion.rect {...part(jelly(0.4, 0.72))} height="18" rx="2" style={edge(0.5, 1)} width="18" x="3" y="3" />
		</>
	),
});
