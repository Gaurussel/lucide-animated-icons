import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const aim = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const lock = pose({ scale: [1, 0.8, 1] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "crosshair",
	render: (part) => (
		<>
			<motion.circle {...part(lock)} cx="12" cy="12" r="10" style={pivot(12, 12)} />
			<motion.line {...part(aim(-3.5, 0))} x1="22" x2="18" y1="12" y2="12" />
			<motion.line {...part(aim(3.5, 0))} x1="6" x2="2" y1="12" y2="12" />
			<motion.line {...part(aim(0, 3.5))} x1="12" x2="12" y1="6" y2="2" />
			<motion.line {...part(aim(0, -3.5))} x1="12" x2="12" y1="22" y2="18" />
		</>
	),
});
