import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, springy } from "../helpers.ts";

const mirror = pose({ scaleX: [1, -1, 1] }, { duration: 0.72, times: [0, 0.38, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "star-half",
	render: (part) => (
		<motion.g {...part(hop(0.72))} style={centered}>
			<motion.path
				{...part(mirror)}
				d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
				style={pivot(12, 12)}
			/>
		</motion.g>
	),
});
