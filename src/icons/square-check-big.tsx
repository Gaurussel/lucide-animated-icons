import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, redraw, ring, snap } from "../helpers.ts";

const tick = pose(
	{ scale: [1, 1, 1.35, 1] },
	{ duration: 0.72, times: [0, 0.4, 0.55, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-check-big",
	render: (part) => (
		<>
			<motion.path
				{...part(jelly(0.38, 0.72))}
				d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"
				style={centered}
			/>
			<motion.g {...part(tick)} style={pivot(12, 14)}>
				<motion.path {...part(redraw(0, 0.4))} d="m9 11 3 3L22 4" />
			</motion.g>
		</>
	),
});
