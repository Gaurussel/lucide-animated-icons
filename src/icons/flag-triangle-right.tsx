import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const flap = pose(
	{ rotate: [0, 0, -10, 0] },
	{ duration: 0.75, times: [0, 0.42, 0.52, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "flag-triangle-right",
	render: (part) => (
		<motion.g {...part(flap)} style={pivot(7, 22)}>
			<motion.path {...part(redraw(0, 0.45))} d="M7 22V2l10 5-10 5" />
		</motion.g>
	),
});
