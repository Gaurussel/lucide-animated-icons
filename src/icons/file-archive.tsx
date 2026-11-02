import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const _shackle = pose({ y: [0, -3, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "file-archive",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" />
			<motion.path {...part(redraw(0.08, 0.3))} d="M10 7V6" />
			<motion.path {...part(redraw(0.14, 0.3))} d="M10 12v-1" />
			<motion.path {...part(redraw(0.2, 0.3))} d="M10 18v-2" />
			<motion.circle
				{...part(pose({ y: [0, 2.5, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] }))}
				cx="10"
				cy="20"
				r="2"
			/>
		</motion.g>
	),
});
