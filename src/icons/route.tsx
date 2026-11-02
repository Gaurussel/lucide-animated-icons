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
	name: "route",
	render: (part) => (
		<>
			<motion.circle {...part(start)} cx="6" cy="19" r="3" style={centered} />
			<motion.path {...part(redraw(0.08, 0.45))} d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
			<motion.circle {...part(arrive)} cx="18" cy="5" r="3" />
		</>
	),
});
