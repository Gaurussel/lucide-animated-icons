import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const guide = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, x, 0], y: [0, y, y, 0] }, { duration: 0.8, delay, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "frame",
	render: (part) => (
		<>
			<motion.line {...part(guide(0, 2, 0))} x1="22" x2="2" y1="6" y2="6" />
			<motion.line {...part(guide(0, -2, 0))} x1="22" x2="2" y1="18" y2="18" />
			<motion.line {...part(guide(2, 0, 0.2))} x1="6" x2="6" y1="2" y2="22" />
			<motion.line {...part(guide(-2, 0, 0.2))} x1="18" x2="18" y1="2" y2="22" />
		</>
	),
});
