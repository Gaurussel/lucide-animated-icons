import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, snap, springy } from "../helpers.ts";

const shoot = pose(
	{ x: [0, -4.2, 3, 0], y: [0, 4.2, -3, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.3, 0.31, 1], ease: ["easeIn", "easeInOut", springy] },
);
const flinch = pose({ scale: [1, 0.93, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-arrow-out-down-left",
	render: (part) => (
		<motion.g {...part(hop(0.65))} style={centered}>
			<motion.g {...part(shoot)}>
				<path d="m3 21 9-9" />
				<path d="M9 21H3v-6" />
			</motion.g>
			<motion.path
				{...part(flinch)}
				d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"
				style={centered}
			/>
		</motion.g>
	),
});
