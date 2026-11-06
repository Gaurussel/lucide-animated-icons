import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const shoot = pose(
	{ x: [0, 3.6, -2.4, 0], y: [0, -3.6, 2.4, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.3, 0.31, 1], ease: ["easeIn", "easeInOut", springy] },
);
const flinch = pose({ scale: [1, 0.88, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "mars",
	render: (part) => (
		<>
			<motion.g {...part(shoot)}>
				<path d="M16 3h5v5" />
				<path d="m21 3-6.75 6.75" />
			</motion.g>
			<motion.circle {...part(flinch)} cx="10" cy="14" r="6" style={centered} />
		</>
	),
});
