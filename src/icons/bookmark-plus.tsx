import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const tuck = pose({ y: [0, -5, 0], rotate: [0, -12, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const nod = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.85, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "bookmark-plus",
	render: (part) => (
		<motion.g {...part(tuck)} style={pivot(12, 3)}>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
			<motion.g {...part(nod)} style={pivot(12, 10)}>
				<line x1="12" x2="12" y1="7" y2="13" />
				<line x1="15" x2="9" y1="10" y2="10" />
			</motion.g>
		</motion.g>
	),
});
