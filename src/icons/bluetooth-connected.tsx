import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, ring, snap } from "../helpers.ts";

const signal = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "bluetooth-connected",
	render: (part) => (
		<>
			<motion.g {...part(hop(0.65))} style={centered}>
				<path d="m7 7 10 10-5 5V2l5 5L7 17" />
			</motion.g>
			<motion.line {...part(signal(2.5))} x1="18" x2="21" y1="12" y2="12" />
			<motion.line {...part(signal(-2.5))} x1="3" x2="6" y1="12" y2="12" />
		</>
	),
});
