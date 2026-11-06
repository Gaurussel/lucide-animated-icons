import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const ping = pose(
	{ y: [0, -1.8, 0], scale: [1, 1.6, 1] },
	{ duration: 0.6, times: [0, 0.25, 1], ease: [snap, springy] },
);
const arc = (delay: number) =>
	pose({ y: [0, -1.5, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "wifi-high",
	render: (part) => (
		<>
			<motion.path {...part(ping)} d="M12 20h.01" style={centered} />
			<motion.g {...part(arc(0.06))}>
				<motion.path {...part(redraw(0.06, 0.45))} d="M8.5 16.429a5 5 0 0 1 7 0" />
			</motion.g>
			<motion.g {...part(arc(0.12))}>
				<motion.path {...part(redraw(0.12, 0.45))} d="M5 12.859a10 10 0 0 1 14 0" />
			</motion.g>
		</>
	),
});
