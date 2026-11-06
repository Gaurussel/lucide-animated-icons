import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -2.4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "folder-sync",
	render: (part) => (
		<>
			<motion.g {...part(leap)}>
				<motion.path
					{...part(jelly(0.44, 0.65))}
					d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
					style={edge(0.5, 1)}
				/>
			</motion.g>
			<motion.g {...part(turn)} style={pivot(17, 16)}>
				<path d="M12 10v4h4" />
				<path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
				<path d="M22 22v-4h-4" />
				<path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
			</motion.g>
		</>
	),
});
