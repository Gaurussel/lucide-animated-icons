import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const shake = pose({ rotate: [0, -18, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "grid-2x2-x",
	render: (part) => (
		<>
			<motion.path
				{...part(tilt)}
				d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
				style={pivot(3, 21)}
			/>
			<motion.g {...part(shake)} style={pivot(18.5, 18.5)}>
				<motion.path {...part(redraw(0, 0.4))} d="m16 16 5 5" />
				<motion.path {...part(redraw(0.1, 0.4))} d="m16 21 5-5" />
			</motion.g>
		</>
	),
});
