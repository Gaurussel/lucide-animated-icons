import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -2.4, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "shopping-bag",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 2)}>
			<motion.path {...part(redraw(0.1, 0.5))} d="M16 10a4 4 0 0 1-8 0" />
			<path d="M3.103 6.034h17.794" />
			<path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
		</motion.g>
	),
});
