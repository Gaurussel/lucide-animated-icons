import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const arrive = (x: number, y: number, delay: number) =>
	pose(
		{ x: [0, x, 0], y: [0, y, 0], scale: [1, 1.21, 1] },
		{ duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "waypoints",
	render: (part) => (
		<>
			<motion.circle {...part(arrive(0, -2, 0))} cx="12" cy="4.5" r="2.5" style={centered} />
			<motion.path {...part(redraw(0.04, 0.3))} d="m10.2 6.3-3.9 3.9" />
			<motion.circle {...part(arrive(-2, 0, 0.1))} cx="4.5" cy="12" r="2.5" style={centered} />
			<motion.path {...part(redraw(0.14, 0.3))} d="M7 12h10" />
			<motion.circle {...part(arrive(2, 0, 0.2))} cx="19.5" cy="12" r="2.5" style={centered} />
			<motion.path {...part(redraw(0.24, 0.3))} d="m13.8 17.7 3.9-3.9" />
			<motion.circle {...part(arrive(0, 2, 0.3))} cx="12" cy="19.5" r="2.5" style={centered} />
		</>
	),
});
