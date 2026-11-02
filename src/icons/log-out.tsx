import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ x: [0, -2, 8, -5, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const slam = pose(
	{ scaleX: [1, 1, 0.75, 1] },
	{ duration: 0.65, times: [0, 0.35, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "log-out",
	render: (part) => (
		<>
			<motion.g {...part(dash)}>
				<path d="m16 17 5-5-5-5" />
				<path d="M21 12H9" />
			</motion.g>
			<motion.path {...part(slam)} d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" style={edge(0, 0.5)} />
		</>
	),
});
