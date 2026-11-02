import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const tilt = pose({ rotate: [0, -30, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const press = pose({ y: [0, 1.5, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "joystick",
	render: (part) => (
		<>
			<path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
			<motion.path {...part(press)} d="M6 15v-2" />
			<motion.g {...part(tilt)} style={pivot(12, 15)}>
				<path d="M12 15V9" />
				<circle cx="12" cy="6" r="3" />
			</motion.g>
		</>
	),
});
