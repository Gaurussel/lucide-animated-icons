import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const press = pose({ y: [0, 2, 0] }, { duration: 0.5, times: [0, 0.3, 1], ease: [snap, springy] });
const rewind = pose({ rotate: [0, -360] }, { duration: 0.75, ease: springy, reset: true });
const wind = pose({ rotate: [0, -30, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "timer-reset",
	render: (part) => (
		<>
			<motion.path {...part(press)} d="M10 2h4" />
			<motion.path {...part(rewind)} d="M12 14v-4" style={pivot(12, 14)} />
			<motion.g {...part(wind)} style={pivot(12, 14)}>
				<path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
				<path d="M9 17H4v5" />
			</motion.g>
		</>
	),
});
