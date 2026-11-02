import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const shoot = pose(
	{ x: [0, 6, -4, 0], y: [0, -6, 4, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.3, 0.31, 1], ease: ["easeIn", "easeInOut", springy] },
);
const flinch = pose({ scale: [1, 0.8, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "mars-stroke",
	render: (part) => (
		<>
			<motion.g {...part(shoot)}>
				<path d="m14 6 4 4" />
				<path d="M17 3h4v4" />
				<path d="m21 3-7.75 7.75" />
			</motion.g>
			<motion.circle {...part(flinch)} cx="9" cy="15" r="6" style={centered} />
		</>
	),
});
