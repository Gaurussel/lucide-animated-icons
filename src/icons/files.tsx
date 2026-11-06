import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const deal = pose(
	{ x: [0, 2.4, 0], y: [0, -2.4, 0], rotate: [0, 7.2, 0] },
	{ duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "files",
	render: (part) => (
		<>
			<motion.g {...part(deal)} style={centered}>
				<path d="M20 7h-3a2 2 0 0 1-2-2V2" />
				<path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
			</motion.g>
			<motion.path {...part(redraw(0.12, 0.5))} d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
		</>
	),
});
