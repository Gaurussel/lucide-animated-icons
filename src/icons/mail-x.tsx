import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const flap = pose({ scaleY: [1, -0.02, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const strike = pose({ scale: [1, 0.89, 1] }, { duration: 0.65, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "mail-x",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.02, 0.65))} style={edge(0.5, 1)}>
				<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" />
				<motion.path {...part(flap)} d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" style={edge(0.5, 0)} />
			</motion.g>
			<motion.g {...part(strike)} style={centered}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m17 17 4 4" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m21 17-4 4" />
			</motion.g>
		</>
	),
});
