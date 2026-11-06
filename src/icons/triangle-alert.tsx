import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const alarm = pose({ rotate: [0, -9.6, 0] }, { duration: 0.75, times: [0, 0.12, 1], ease: [snap, ring] });
const dot = pose(
	{ y: [0, 0, 1.5, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "triangle-alert",
	render: (part) => (
		<motion.g {...part(alarm)} style={pivot(12, 21)}>
			<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
			<motion.path {...part(redraw(0.05, 0.45))} d="M12 9v4" />
			<motion.path {...part(dot)} d="M12 17h.01" />
		</motion.g>
	),
});
