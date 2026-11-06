import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const flap = pose({ scaleY: [1, -0.02, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const tilt = pose({ rotate: [0, -18, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });
const dot = pose({ y: [0, -1.8, 0] }, { duration: 0.6, delay: 0.08, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "mail-question-mark",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.02, 0.65))} style={edge(0.5, 1)}>
				<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
				<motion.path {...part(flap)} d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" style={edge(0.5, 0)} />
			</motion.g>
			<motion.path
				{...part(tilt)}
				d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
				style={pivot(20, 17.5)}
			/>
			<motion.path {...part(dot)} d="M20 22v.01" />
		</>
	),
});
