import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const rumble = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const press = (delay: number) =>
	pose({ scale: [1, 3, 1] }, { duration: 0.5, delay, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "gamepad",
	render: (part) => (
		<motion.g {...part(rumble)} style={pivot(12, 12)}>
			<line x1="6" x2="10" y1="12" y2="12" />
			<line x1="8" x2="8" y1="10" y2="14" />
			<motion.line {...part(press(0.1))} style={centered} x1="15" x2="15.01" y1="13" y2="13" />
			<motion.line {...part(press(0.22))} style={centered} x1="18" x2="18.01" y1="11" y2="11" />
			<rect height="12" rx="2" width="20" x="2" y="6" />
		</motion.g>
	),
});
