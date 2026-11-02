import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const press = pose({ y: [0, 1.5, 0] }, { duration: 0.6, times: [0, 0.15, 1], ease: [snap, springy] });
const leg = (degrees: number) =>
	pose({ rotate: [0, degrees, 0] }, { duration: 0.7, delay: 0.08, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "drafting-compass",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="5" r="2" />
			<motion.path {...part(leg(12))} d="m3 21 8.02-14.26" style={pivot(12, 5)} />
			<motion.g {...part(leg(-14))} style={pivot(12, 5)}>
				<path d="m12.99 6.74 1.93 3.44" />
				<path d="m21 21-2.16-3.84" />
			</motion.g>
			<motion.path {...part(redraw(0.22, 0.45))} d="M19.136 12a10 10 0 0 1-14.271 0" />
		</>
	),
});
