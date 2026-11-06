import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const shake = pose({ rotate: [0, -18, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });
const node = (delay: number) =>
	pose({ scale: [1, 1.21, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "git-pull-request-closed",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="6" cy="6" r="3" style={centered} />
			<path d="M6 9v12" />
			<motion.g {...part(shake)} style={pivot(18, 6)}>
				<motion.path {...part(redraw(0, 0.4))} d="m21 3-6 6" />
				<motion.path {...part(redraw(0.1, 0.4))} d="m21 9-6-6" />
			</motion.g>
			<path d="M18 11.5V15" />
			<motion.circle {...part(node(0.2))} cx="18" cy="18" r="3" style={centered} />
		</>
	),
});
