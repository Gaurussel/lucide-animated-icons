import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, snap, springy } from "../helpers.ts";

const shoot = pose(
	{ x: [0, -7, 5, 0], y: [0, -7, 5, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.3, 0.31, 1], ease: ["easeIn", "easeInOut", springy] },
);
const flinch = pose({ scale: [1, 0.88, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-arrow-out-up-left",
	render: (part) => (
		<motion.g {...part(hop(0.65))} style={centered}>
			<motion.g {...part(shoot)}>
				<path d="m3 3 9 9" />
				<path d="M3 9V3h6" />
			</motion.g>
			<motion.path
				{...part(flinch)}
				d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"
				style={centered}
			/>
		</motion.g>
	),
});
