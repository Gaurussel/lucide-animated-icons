import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, hop, pose, redraw, rubber, snap } from "../helpers.ts";

const dash = pose({ x: [0, 4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "check-line",
	render: (part) => (
		<>
			<motion.g {...part(hop(0.7))} style={edge(0.5, 1)}>
				<motion.path {...part(redraw(0.1, 0.35))} d="M20 4L9 15" />
				<motion.path {...part(redraw(0, 0.3))} d="M9 15L4 10" />
			</motion.g>
			<motion.path {...part(dash)} d="M21 19L3 19" />
		</>
	),
});
