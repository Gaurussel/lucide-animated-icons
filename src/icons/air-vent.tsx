import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const breeze = pose(
	{ x: [0, -2, 2, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const hum = pose({ y: [0, -1.5, 0] }, { duration: 0.6, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "air-vent",
	render: (part) => (
		<>
			<motion.g {...part(hum)}>
				<path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
				<path d="M6 8h12" />
			</motion.g>
			<motion.g {...part(breeze)}>
				<motion.path {...part(redraw(0.05, 0.55))} d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" />
				<motion.path {...part(redraw(0.15, 0.55))} d="M6.6 15.572A2 2 0 1 0 10 17v-5" />
			</motion.g>
		</>
	),
});
