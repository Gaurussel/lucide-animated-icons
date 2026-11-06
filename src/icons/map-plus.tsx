import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, hop, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const unfold = pose(
	{ y: [0, -2.4, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "map-plus",
	render: (part) => (
		<>
			<motion.g {...part(unfold)} style={edge(0.5, 1)}>
				<path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" />
				<motion.path {...part(redraw(0.1, 0.45))} d="M9 3.236v15" />
				<motion.path {...part(redraw(0.2, 0.4))} d="M15 5.764V12" />
			</motion.g>
			<motion.g {...part(hop(0.65))} style={centered}>
				<motion.g {...part(nod)} style={centered}>
					<path d="M18 15v6" />
					<path d="M21 18h-6" />
				</motion.g>
			</motion.g>
		</>
	),
});
