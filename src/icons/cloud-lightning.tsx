import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap, springy } from "../helpers.ts";

const rumble = pose({ x: [0, -2, 0], y: [0, -1, 0] }, { duration: 0.7, times: [0, 0.1, 1], ease: ["easeInOut", ring] });
const strike = pose({ y: [0, 3, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cloud-lightning",
	render: (part) => (
		<>
			<motion.path {...part(rumble)} d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
			<motion.g {...part(strike)}>
				<motion.path {...part(redraw(0, 0.35))} d="m13 12-3 5h4l-3 5" />
			</motion.g>
		</>
	),
});
