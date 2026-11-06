import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, rubber, snap } from "../helpers.ts";

const leap = pose(
	{ y: [0, -2.4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const zoom = pose(
	{ scale: [1, 1.21, 1], rotate: [0, -12, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "folder-search",
	render: (part) => (
		<>
			<motion.g {...part(leap)}>
				<motion.path
					{...part(jelly(0.44, 0.65))}
					d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
					style={edge(0.5, 1)}
				/>
			</motion.g>
			<motion.g {...part(zoom)} style={pivot(17, 17)}>
				<path d="m21 21-1.9-1.9" />
				<circle cx="17" cy="17" r="3" />
			</motion.g>
		</>
	),
});
