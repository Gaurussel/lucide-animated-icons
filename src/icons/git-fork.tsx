import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const tine = (direction: number) =>
	pose({ x: [0, 2.5 * direction, 0], y: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const node = (delay: number) =>
	pose({ scale: [1, 1.21, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "git-fork",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="12" cy="18" r="3" style={centered} />
			<motion.circle {...part(tine(-1))} cx="6" cy="6" r="3" />
			<motion.circle {...part(tine(1))} cx="18" cy="6" r="3" />
			<motion.path {...part(redraw(0.1, 0.5))} d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
			<path d="M12 12v3" />
		</>
	),
});
