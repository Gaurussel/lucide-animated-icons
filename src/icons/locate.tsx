import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const aim = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const lockOn = pose({ scale: [1, 0.85, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "locate",
	render: (part) => (
		<>
			<motion.line {...part(aim(3, 0))} x1="2" x2="5" y1="12" y2="12" />
			<motion.line {...part(aim(-3, 0))} x1="19" x2="22" y1="12" y2="12" />
			<motion.line {...part(aim(0, 3))} x1="12" x2="12" y1="2" y2="5" />
			<motion.line {...part(aim(0, -3))} x1="12" x2="12" y1="19" y2="22" />
			<motion.circle {...part(lockOn)} cx="12" cy="12" r="7" style={centered} />
		</>
	),
});
