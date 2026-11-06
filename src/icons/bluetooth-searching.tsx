import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, redraw, ring, snap } from "../helpers.ts";

const signal = pose({ x: [0, 1.8, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "bluetooth-searching",
	render: (part) => (
		<>
			<motion.g {...part(hop(0.65))} style={centered}>
				<path d="m7 7 10 10-5 5V2l5 5L7 17" />
			</motion.g>
			<motion.g {...part(signal)}>
				<motion.path {...part(redraw(0.05, 0.45))} d="M20.83 14.83a4 4 0 0 0 0-5.66" />
				<path d="M18 12h.01" />
			</motion.g>
		</>
	),
});
