import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const swipe = pose(
	{ y: [0, 1.5, -9, 9, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);

export default createAnimatedIcon({
	name: "gallery-vertical",
	render: (part) => (
		<>
			<motion.path {...part(jelly(0.36, 0.7))} d="M3 2h18" style={edge(0.5, 0.5)} />
			<motion.rect {...part(swipe)} height="12" rx="2" width="18" x="3" y="6" />
			<motion.path {...part(jelly(0.36, 0.7))} d="M3 22h18" style={edge(0.5, 0.5)} />
		</>
	),
});
