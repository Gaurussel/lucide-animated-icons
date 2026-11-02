import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const top = pose(
	{ y: [0, -5, 0.5, 0], rotate: [0, -10, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "lectern",
	render: (part) => (
		<>
			<motion.g {...part(top)} style={edge(0.5, 1)}>
				<path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" />
				<path d="M18 6V3a1 1 0 0 0-1-1h-3" />
			</motion.g>
			<motion.rect {...part(jelly(0.42, 0.7))} height="12" rx="1" style={edge(0.5, 1)} width="8" x="8" y="10" />
		</>
	),
});
