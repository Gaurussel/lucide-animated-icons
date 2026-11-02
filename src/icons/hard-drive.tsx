import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const blink = (delay: number) =>
	pose({ scale: [1, 2.2, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "hard-drive",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.g {...part(jelly(0.44, 0.65))} style={edge(0.5, 1)}>
				<line x1="22" x2="2" y1="12" y2="12" />
				<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
			</motion.g>
			<motion.line {...part(blink(0.25))} style={centered} x1="6" x2="6.01" y1="16" y2="16" />
			<motion.line {...part(blink(0.35))} style={centered} x1="10" x2="10.01" y1="16" y2="16" />
		</motion.g>
	),
});
