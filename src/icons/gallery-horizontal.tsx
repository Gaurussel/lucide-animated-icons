import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const swipe = pose(
	{ x: [0, 0.9, -5.4, 5.4, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);

export default createAnimatedIcon({
	name: "gallery-horizontal",
	render: (part) => (
		<>
			<motion.path {...part(jelly(0.36, 0.7))} d="M2 3v18" style={edge(0.5, 0.5)} />
			<motion.rect {...part(swipe)} height="18" rx="2" width="12" x="6" y="3" />
			<motion.path {...part(jelly(0.36, 0.7))} d="M22 3v18" style={edge(0.5, 0.5)} />
		</>
	),
});
