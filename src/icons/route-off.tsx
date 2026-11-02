import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const start = pose(
	{ scale: [1, 0.3, 1.3, 1] },
	{ duration: 0.5, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const arrive = pose(
	{ y: [0, -6, -6, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.75, times: [0, 0.15, 0.5, 1], ease: ["easeIn", "linear", springy] },
);

export default createAnimatedIcon({
	name: "route-off",
	render: (part) => (
		<>
			<motion.circle {...part(start)} cx="6" cy="19" r="3" style={centered} />
			<motion.path {...part(redraw(0.08, 0.3))} d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
			<motion.path {...part(redraw(0.16, 0.3))} d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
			<motion.path {...part(redraw(0.22, 0.3))} d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
			<motion.path {...part(redraw(0.28, 0.3))} d="M15 5h-4.3" />
			<motion.path {...part(redraw(0.4, 0.3))} d="m2 2 20 20" />
			<motion.circle {...part(arrive)} cx="18" cy="5" r="3" />
		</>
	),
});
