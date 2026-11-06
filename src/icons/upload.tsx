import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const launch = pose(
	{ y: [0, -10, 0], opacity: [1, 0, 1] },
	{ duration: 0.65, times: [0, 0.28, 1], ease: [snap, springy] },
);
const crouch = pose(
	{ scaleX: [1, 1.06, 1], scaleY: [1, 0.82, 1] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "upload",
	render: (part) => (
		<>
			<motion.g {...part(launch)}>
				<motion.path {...part(redraw(0.19, 0.33))} d="M12 3v12" />
				<motion.path {...part(redraw(0.24, 0.33))} d="m17 8-5-5-5 5" />
			</motion.g>
			<motion.path {...part(crouch)} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" style={edge(0.5, 1)} />
		</>
	),
});
