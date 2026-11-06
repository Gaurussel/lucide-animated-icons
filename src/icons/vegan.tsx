import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const sprout = pose(
	{ scale: [1, 0.64, 1.18, 1], rotate: [0, 0, -18, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "vegan",
	render: (part) => (
		<>
			<motion.path {...part(sprout)} d="M16 8q6 0 6-6-6 0-6 6" style={pivot(16, 8)} />
			<motion.path {...part(redraw(0.15, 0.55))} d="M17.41 3.59a10 10 0 1 0 3 3" />
			<motion.path {...part(redraw(0, 0.42))} d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
		</>
	),
});
