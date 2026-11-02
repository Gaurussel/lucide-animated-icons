import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const nudge = (x: number, y: number, delay = 0) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.65, delay, times: [0, 0.25, 1], ease: [snap, springy] });
const dot = (delay: number) =>
	pose({ y: [0, -3, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "chevrons-left-right-ellipsis",
	render: (part) => (
		<>
			<motion.path {...part(dot(0.1))} d="M12 12h.01" style={centered} />
			<motion.path {...part(dot(0.2))} d="M16 12h.01" style={centered} />
			<motion.path {...part(nudge(3, 0))} d="m17 7 5 5-5 5" />
			<motion.path {...part(nudge(-3, 0))} d="m7 7-5 5 5 5" />
			<motion.path {...part(dot(0))} d="M8 12h.01" style={centered} />
		</>
	),
});
