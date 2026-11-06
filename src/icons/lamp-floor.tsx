import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap } from "../helpers.ts";

const sway = pose(
	{ y: [0, -1.2, 0], rotate: [0, -10.8, 0] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] },
);

export default createAnimatedIcon({
	name: "lamp-floor",
	render: (part) => (
		<>
			<path d="M12 10v12" />
			<motion.path
				{...part(sway)}
				d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"
				style={pivot(12, 9)}
			/>
			<motion.path {...part(jelly(0.2, 0.75))} d="M9 22h6" style={edge(0.5, 1)} />
		</>
	),
});
