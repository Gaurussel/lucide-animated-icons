import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const push = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "move-3d",
	render: (part) => (
		<>
			<path d="M5 3v16h16" />
			<motion.path {...part(redraw(0.1, 0.45))} d="m5 19 6-6" />
			<motion.path {...part(push(0, -3))} d="m2 6 3-3 3 3" />
			<motion.path {...part(push(3, 0))} d="m18 16 3 3-3 3" />
		</>
	),
});
