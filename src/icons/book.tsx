import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0] }, { duration: 0.72, times: [0, 0.3, 1], ease: ["easeInOut", springy] });
const flip = pose({ scaleX: [1, -1, 1] }, { duration: 0.72, times: [0, 0.4, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "book",
	render: (part) => (
		<motion.g {...part(lift)}>
			<motion.path
				{...part(flip)}
				d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
				style={centered}
			/>
		</motion.g>
	),
});
