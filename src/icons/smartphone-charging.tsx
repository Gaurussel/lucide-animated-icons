import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const zap = pose({ scale: [1, 1.21, 1] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const lift = pose({ y: [0, -1.8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "smartphone-charging",
	render: (part) => (
		<motion.g {...part(lift)}>
			<rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
			<motion.g {...part(zap)} style={centered}>
				<motion.path {...part(redraw(0, 0.45))} d="M12.667 8 10 12h4l-2.667 4" />
			</motion.g>
		</motion.g>
	),
});
