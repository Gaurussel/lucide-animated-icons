import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const shake = pose({ rotate: [0, -16, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });
const drop = pose(
	{ y: [0, 0, 3, 0] },
	{ duration: 0.75, times: [0, 0.36, 0.46, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "phone-off",
	render: (part) => (
		<>
			<motion.g {...part(drop)}>
				<motion.g {...part(shake)} style={pivot(12, 12)}>
					<path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" />
					<path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" />
				</motion.g>
			</motion.g>
			<motion.path {...part(redraw(0.12, 0.25))} d="M22 2 2 22" />
		</>
	),
});
