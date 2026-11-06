import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const pinch = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const grab = pose({ scale: [1, 1.48, 1] }, { duration: 0.5, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "grip",
	render: (part) => (
		<>
			<motion.circle {...part(grab)} cx="12" cy="12" r="1" style={centered} />
			<motion.circle {...part(pinch(0, 2.5, 0.08))} cx="12" cy="5" r="1" />
			<motion.circle {...part(pinch(-2.5, 0, 0.08))} cx="19" cy="12" r="1" />
			<motion.circle {...part(pinch(0, -2.5, 0.08))} cx="12" cy="19" r="1" />
			<motion.circle {...part(pinch(2.5, 0, 0.08))} cx="5" cy="12" r="1" />
			<motion.circle {...part(pinch(-2.5, 2.5, 0.16))} cx="19" cy="5" r="1" />
			<motion.circle {...part(pinch(2.5, 2.5, 0.16))} cx="5" cy="5" r="1" />
			<motion.circle {...part(pinch(-2.5, -2.5, 0.16))} cx="19" cy="19" r="1" />
			<motion.circle {...part(pinch(2.5, -2.5, 0.16))} cx="5" cy="19" r="1" />
		</>
	),
});
