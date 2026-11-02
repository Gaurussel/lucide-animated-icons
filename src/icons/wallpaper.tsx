import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const sun = pose(
	{ x: [0, 3, 0], y: [0, -3, 0], scale: [1, 1.4, 1] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const screen = pose(
	{ y: [0, -2, 0], rotate: [0, -8, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "wallpaper",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={pivot(12, 17)}>
				<motion.circle {...part(sun)} cx="8" cy="9" r="2" style={centered} />
				<path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.45))} d="M8 21h8" />
			<path d="M12 17v4" />
		</>
	),
});
