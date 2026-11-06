import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const step = pose({ y: [0, -3, 0], rotate: [0, -12, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const toe = (delay: number) =>
	pose({ scale: [1, 0.4, 1] }, { duration: 0.5, delay, times: [0, 0.25, 1], ease: ["easeIn", springy] });

export default createAnimatedIcon({
	name: "paw-print",
	render: (part) => (
		<motion.g {...part(step)} style={centered}>
			<motion.circle {...part(toe(0.05))} cx="11" cy="4" r="2" style={centered} />
			<motion.circle {...part(toe(0.12))} cx="18" cy="8" r="2" style={centered} />
			<motion.circle {...part(toe(0.19))} cx="20" cy="16" r="2" style={centered} />
			<path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
		</motion.g>
	),
});
