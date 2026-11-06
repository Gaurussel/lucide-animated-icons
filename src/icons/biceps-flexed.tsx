import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const flex = pose({ rotate: [0, -6, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });
const pop = pose({ scale: [1, 1.18, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "biceps-flexed",
	render: (part) => (
		<motion.g {...part(flex)} style={pivot(4, 20)}>
			<path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
			<motion.path {...part(pop)} d="M15 14a5 5 0 0 0-7.584 2" style={centered} />
			<path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
		</motion.g>
	),
});
