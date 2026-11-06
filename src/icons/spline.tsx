import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const handle = (x: number, y: number, delay: number) =>
	pose(
		{ x: [0, 3 * x, 0], y: [0, 3 * y, 0], scale: [1, 1.24, 1] },
		{ duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "spline",
	render: (part) => (
		<>
			<motion.circle {...part(handle(1, -1, 0.12))} cx="19" cy="5" r="2" style={centered} />
			<motion.circle {...part(handle(-1, 1, 0))} cx="5" cy="19" r="2" style={centered} />
			<motion.path {...part(redraw(0.05, 0.55))} d="M5 17A12 12 0 0 1 17 5" />
		</>
	),
});
