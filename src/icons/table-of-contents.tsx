import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const slide = (delay: number) =>
	pose({ x: [0, -2.4, 0] }, { duration: 0.55, delay, times: [0, 0.28, 1], ease: [snap, springy] });
const bullet = (delay: number) =>
	pose({ scale: [1, 1.9, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "table-of-contents",
	render: (part) => (
		<>
			<motion.path {...part(slide(0.07))} d="M16 12H3" />
			<motion.path {...part(slide(0.14))} d="M16 18H3" />
			<motion.path {...part(slide(0))} d="M16 6H3" />
			<motion.path {...part(bullet(0.17))} d="M21 12h.01" style={centered} />
			<motion.path {...part(bullet(0.24))} d="M21 18h.01" style={centered} />
			<motion.path {...part(bullet(0.1))} d="M21 6h.01" style={centered} />
		</>
	),
});
