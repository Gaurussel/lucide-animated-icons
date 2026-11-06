import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, redraw, ring, snap } from "../helpers.ts";

const beat = pose({ y: [0, 0, -1.5, 0] }, { duration: 0.72, times: [0, 0.3, 0.4, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "square-activity",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.35, 0.72))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(beat)}>
				<motion.path {...part(redraw(0, 0.4))} d="M17 12h-2l-2 5-2-10-2 5H7" />
			</motion.g>
		</>
	),
});
