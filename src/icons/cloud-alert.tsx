import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap, springy } from "../helpers.ts";

const shake = pose({ x: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: ["easeInOut", ring] });
const bang = pose({ y: [0, -4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const dot = pose({ scale: [1, 1.6, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cloud-alert",
	render: (part) => (
		<>
			<motion.path {...part(shake)} d="M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708" />
			<motion.g {...part(bang)}>
				<path d="M12 12v4" />
				<motion.path {...part(dot)} d="M12 20h.01" style={centered} />
			</motion.g>
		</>
	),
});
