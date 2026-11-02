import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const rock = pose({ y: [0, -2, 0], rotate: [0, -10, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const light = (delay: number) =>
	pose({ scale: [1, 2.4, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "tram-front",
	render: (part) => (
		<>
			<motion.g {...part(rock)} style={pivot(12, 19)}>
				<rect height="16" rx="2" width="16" x="4" y="3" />
				<path d="M4 11h16" />
				<path d="M12 3v8" />
				<motion.path {...part(light(0.1))} d="M8 15h.01" style={centered} />
				<motion.path {...part(light(0.16))} d="M16 15h.01" style={centered} />
			</motion.g>
			<path d="m8 19-2 3" />
			<path d="m18 22-2-3" />
		</>
	),
});
