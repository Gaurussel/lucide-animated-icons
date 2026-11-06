import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const apart = (y: number) =>
	pose(
		{ y: [0, y, 0], scale: [1, 1.36, 1] },
		{ duration: 0.6, delay: 0.12, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "divide",
	render: (part) => (
		<>
			<motion.line {...part(redraw(0, 0.35))} x1="5" x2="19" y1="12" y2="12" />
			<motion.circle {...part(apart(-4))} cx="12" cy="6" r="1" style={centered} />
			<motion.circle {...part(apart(4))} cx="12" cy="18" r="1" style={centered} />
		</>
	),
});
