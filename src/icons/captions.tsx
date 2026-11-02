import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0], rotate: [0, -6, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "captions",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<rect height="14" rx="2" ry="2" width="18" x="3" y="5" />
			<motion.path {...part(redraw(0.1, 0.55))} d="M7 15h4M15 15h2M7 11h2M13 11h4" />
		</motion.g>
	),
});
