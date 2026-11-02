import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ rotate: [0, -15, 10, 0], y: [0, -2, -2, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: [snap, "easeInOut", springy] },
);
const wiggle = (direction: number) =>
	pose({ rotate: [0, 25 * direction, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "panda",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 22)}>
			<path d="M11.25 17.25h1.5L12 18z" />
			<motion.path {...part(redraw(0.3, 0.35))} d="m15 12 2 2" />
			<motion.path {...part(wiggle(1))} d="M18 6.5a.5.5 0 0 0-.5-.5" style={pivot(17, 7)} />
			<path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" />
			<motion.path {...part(wiggle(-1))} d="M6 6.5a.495.495 0 0 1 .5-.5" style={pivot(7, 7)} />
			<motion.path {...part(redraw(0.3, 0.35))} d="m9 12-2 2" />
		</motion.g>
	),
});
