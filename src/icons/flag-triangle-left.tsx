import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const flap = pose(
	{ rotate: [0, 0, 10, 0] },
	{ duration: 0.75, times: [0, 0.42, 0.52, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "flag-triangle-left",
	render: (part) => (
		<motion.g {...part(flap)} style={pivot(17, 22)}>
			<motion.path {...part(redraw(0, 0.45))} d="M17 22V2L7 7l10 5" />
		</motion.g>
	),
});
