import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const tile = (delay: number) =>
	pose(
		{ x: [0, -1.8, 0], scale: [1, 0.82, 1] },
		{ duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "layout-list",
	render: (part) => (
		<>
			<motion.rect {...part(tile(0))} height="7" rx="1" style={centered} width="7" x="3" y="3" />
			<motion.rect {...part(tile(0.12))} height="7" rx="1" style={centered} width="7" x="3" y="14" />
			<motion.path {...part(redraw(0.05, 0.35))} d="M14 4h7" />
			<motion.path {...part(redraw(0.1, 0.35))} d="M14 9h7" />
			<motion.path {...part(redraw(0.17, 0.35))} d="M14 15h7" />
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 20h7" />
		</>
	),
});
