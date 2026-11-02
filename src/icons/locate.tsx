import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const ring = pose({ scale: [1, 0.8, 0.8, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] });
const tick = (x: number, y: number) =>
	pose({ x: [0, x, x, 0], y: [0, y, y, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] });

export default createAnimatedIcon({
	name: "locate",
	render: (part) => (
		<>
			<motion.line {...part(tick(1.5, 0))} x1="2" x2="5" y1="12" y2="12" />
			<motion.line {...part(tick(-1.5, 0))} x1="19" x2="22" y1="12" y2="12" />
			<motion.line {...part(tick(0, 1.5))} x1="12" x2="12" y1="2" y2="5" />
			<motion.line {...part(tick(0, -1.5))} x1="12" x2="12" y1="19" y2="22" />
			<motion.circle {...part(ring)} cx="12" cy="12" r="7" style={centered} />
		</>
	),
});
