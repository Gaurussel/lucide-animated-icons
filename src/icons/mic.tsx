import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const speak = pose(
	{ y: [0, -3, 0], rotate: [0, -12, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const pulse = pose(
	{ scale: [1, 1, 1.2, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "mic",
	render: (part) => (
		<>
			<motion.rect {...part(speak)} height="13" rx="3" style={edge(0.5, 1)} width="6" x="9" y="2" />
			<motion.path {...part(pulse)} d="M19 10v2a7 7 0 0 1-14 0v-2" style={edge(0.5, 0)} />
			<path d="M12 19v3" />
		</>
	),
});
