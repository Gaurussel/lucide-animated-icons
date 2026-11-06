import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const press = pose(
	{ y: [0, 1.2, -0.9, 0], rotate: [0, 0, -3.6, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "fingerprint",
	render: (part) => (
		<motion.g {...part(press)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.1, 0.4))} d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
			<motion.path {...part(redraw(0.14, 0.4))} d="M14 13.12c0 2.38 0 6.38-1 8.88" />
			<motion.path {...part(redraw(0.18, 0.4))} d="M9 6.8a6 6 0 0 1 9 5.2v2" />
			<motion.path {...part(redraw(0.2, 0.4))} d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
			<motion.path {...part(redraw(0.24, 0.4))} d="M8.65 22c.21-.66.45-1.32.57-2" />
			<motion.path {...part(redraw(0.24, 0.4))} d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
			<motion.path {...part(redraw(0.28, 0.4))} d="M2 12a10 10 0 0 1 18-6" />
			<motion.path {...part(redraw(0.32, 0.4))} d="M21.8 16c.2-2 .131-5.354 0-6" />
			<path d="M2 16h.01" />
		</motion.g>
	),
});
