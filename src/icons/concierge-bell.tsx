import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const press = pose({ y: [0, 4, 0] }, { duration: 0.7, times: [0, 0.15, 1], ease: [snap, springy] });
const ding = pose(
	{ y: [0, -3, 0], rotate: [0, -18, 0] },
	{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", ring] },
);

export default createAnimatedIcon({
	name: "concierge-bell",
	render: (part) => (
		<>
			<motion.path
				{...part(jelly(0.2, 0.7))}
				d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(ding)} style={pivot(12, 16)}>
				<path d="M20 16a8 8 0 1 0-16 0" />
				<motion.g {...part(press)}>
					<path d="M12 4v4" />
					<path d="M10 4h4" />
				</motion.g>
			</motion.g>
		</>
	),
});
