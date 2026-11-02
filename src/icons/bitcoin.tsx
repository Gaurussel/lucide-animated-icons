import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, 1, -4, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const flip = pose(
	{ scaleX: [1, 1, -1, 1] },
	{ duration: 0.72, times: [0, 0.12, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "bitcoin",
	render: (part) => (
		<motion.g {...part(toss)}>
			<motion.path
				{...part(flip)}
				d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
				style={centered}
			/>
		</motion.g>
	),
});
