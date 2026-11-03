import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const strike = pose({ scale: [1, 0.82, 1] }, { duration: 0.7, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-x",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.g {...part(strike)} style={centered}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m15 9-6 6" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m9 9 6 6" />
			</motion.g>
		</>
	),
});
