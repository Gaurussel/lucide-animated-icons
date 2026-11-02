import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] };
const jump = pose({ y: [0, -4, 0] }, timing);
const arms = pose({ scaleY: [1, -1.5, 1] }, timing);
const legs = pose({ scaleX: [1, 1.6, 1] }, timing);

export default createAnimatedIcon({
	name: "person-standing",
	render: (part) => (
		<motion.g {...part(jump)}>
			<circle cx="12" cy="5" r="1" />
			<motion.path {...part(legs)} d="m9 20 3-6 3 6" style={pivot(12, 14)} />
			<motion.path {...part(arms)} d="m6 8 6 2 6-2" style={pivot(12, 10)} />
			<path d="M12 10v4" />
		</motion.g>
	),
});
