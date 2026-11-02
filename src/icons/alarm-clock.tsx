import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const rattle = pose({ rotate: [0, -14, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, ring] });
const bells = pose({ y: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, ring] });
const hands = pose({ rotate: [0, 360] }, { duration: 0.7, ease: "easeInOut", reset: true });

export default createAnimatedIcon({
	name: "alarm-clock",
	render: (part) => (
		<motion.g {...part(rattle)} style={pivot(12, 13)}>
			<motion.g {...part(bells)}>
				<path d="M5 3 2 6" />
				<path d="m22 6-3-3" />
			</motion.g>
			<circle cx="12" cy="13" r="8" />
			<path d="M6.38 18.7 4 21" />
			<path d="M17.64 18.67 20 21" />
			<motion.path {...part(hands)} d="M12 9v4l2 2" style={pivot(12, 13)} />
		</motion.g>
	),
});
