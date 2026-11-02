import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const chop = pose(
	{ rotate: [0, -18, 5, 0] },
	{ duration: 0.72, times: [0, 0.22, 0.36, 1], ease: [snap, "easeIn", springy] },
);
const thud = pose({ y: [0, 0, 1.5, 0] }, { duration: 0.72, times: [0, 0.3, 0.4, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "slice",
	render: (part) => (
		<motion.g {...part(thud)}>
			<motion.g {...part(chop)} style={pivot(4, 20)}>
				<motion.path
					{...part(redraw(0.2, 0.45))}
					d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"
				/>
			</motion.g>
		</motion.g>
	),
});
