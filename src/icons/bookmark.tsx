import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const pull = pose(
	{ y: [0, 0.6, -3, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const flutter = pose(
	{ rotate: [0, 0, -8.4, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "bookmark",
	render: (part) => (
		<motion.g {...part(pull)}>
			<motion.g {...part(flutter)} style={pivot(12, 3)}>
				<motion.path {...part(redraw(0.08, 0.5))} d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
			</motion.g>
		</motion.g>
	),
});
