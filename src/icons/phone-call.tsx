import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", "easeOut", springy] },
);
const shake = pose(
	{ rotate: [0, 0, -24, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.28, 1], ease: ["easeInOut", snap, ring] },
);
const wave = (delay: number) =>
	pose({ x: [0, 2, 0], y: [0, -2, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "phone-call",
	render: (part) => (
		<>
			<motion.g {...part(wave(0.3))}>
				<motion.path {...part(redraw(0.3, 0.35))} d="M13 2a9 9 0 0 1 9 9" />
			</motion.g>
			<motion.g {...part(wave(0.2))}>
				<motion.path {...part(redraw(0.2, 0.35))} d="M13 6a5 5 0 0 1 5 5" />
			</motion.g>
			<motion.g {...part(lift)}>
				<motion.path
					{...part(shake)}
					d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
					style={centered}
				/>
			</motion.g>
		</>
	),
});
