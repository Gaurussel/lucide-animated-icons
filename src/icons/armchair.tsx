import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const sit = pose({ y: [0, 2, 0] }, { duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy] });
const lean = pose({ rotate: [0, -16, 0] }, { duration: 0.62, delay: 0.08, times: [0, 0.3, 1], ease: [snap, springy] });
const rock = pose({ rotate: [0, -8, 0] }, { duration: 0.6, delay: 0.12, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "armchair",
	render: (part) => (
		<motion.g {...part(rock)} style={pivot(19, 20)}>
			<motion.path {...part(lean)} d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" style={pivot(12, 9)} />
			<motion.g {...part(sit)}>
				<path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
			</motion.g>
			<path d="M5 18v2" />
			<path d="M19 18v2" />
		</motion.g>
	),
});
