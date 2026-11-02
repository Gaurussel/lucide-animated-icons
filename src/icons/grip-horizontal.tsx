import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const pinch = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "grip-horizontal",
	render: (part) => (
		<>
			<motion.circle {...part(pinch(0, 2, 0))} cx="12" cy="9" r="1" />
			<motion.circle {...part(pinch(0, -2, 0))} cx="12" cy="15" r="1" />
			<motion.circle {...part(pinch(-2.5, 2, 0.1))} cx="19" cy="9" r="1" />
			<motion.circle {...part(pinch(2.5, 2, 0.1))} cx="5" cy="9" r="1" />
			<motion.circle {...part(pinch(-2.5, -2, 0.1))} cx="19" cy="15" r="1" />
			<motion.circle {...part(pinch(2.5, -2, 0.1))} cx="5" cy="15" r="1" />
		</>
	),
});
