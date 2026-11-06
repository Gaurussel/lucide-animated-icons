import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, snap, springy } from "../helpers.ts";

const shoot = pose(
	{ x: [0, 4.2, -3, 0], y: [0, -4.2, 3, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.6, times: [0, 0.3, 0.31, 1], ease: ["easeIn", "easeInOut", springy] },
);
const flinch = pose({ scale: [1, 0.93, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "external-link",
	render: (part) => (
		<motion.g {...part(hop(0.6))} style={centered}>
			<motion.g {...part(shoot)}>
				<path d="M15 3h6v6" />
				<path d="M10 14 21 3" />
			</motion.g>
			<motion.path
				{...part(flinch)}
				d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
				style={centered}
			/>
		</motion.g>
	),
});
