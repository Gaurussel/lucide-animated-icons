import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const sway = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const sun = pose({ y: [0, -3, 0], scale: [1, 1.3, 1] }, { duration: 0.65, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "tent-tree",
	render: (part) => (
		<>
			<motion.circle {...part(sun)} cx="4" cy="4" r="2" style={centered} />
			<motion.g {...part(sway)} style={pivot(17, 14)}>
				<path d="m14 5 3-3 3 3" />
				<path d="m14 10 3-3 3 3" />
				<path d="M17 14V2" />
			</motion.g>
			<path d="M17 14H7l-5 8h20Z" />
			<path d="M8 14v8" />
			<motion.path {...part(redraw(0.1, 0.45))} d="m9 14 5 8" />
		</>
	),
});
