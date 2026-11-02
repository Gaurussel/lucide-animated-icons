import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, springy } from "../helpers.ts";

const layer = (y: number, degrees: number, delay: number) =>
	pose(
		{ y: [0, 1, y, 0], rotate: [0, 0, degrees, 0] },
		{ duration: 0.65, delay, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
	);

export default createAnimatedIcon({
	name: "database",
	render: (part) => (
		<>
			<motion.path {...part(jelly(0.5, 0.75))} d="M3 5V19A9 3 0 0 0 21 19V5" style={edge(0.5, 1)} />
			<motion.path {...part(layer(-3, 6, 0.08))} d="M3 12A9 3 0 0 0 21 12" style={pivot(12, 12)} />
			<motion.ellipse {...part(layer(-6, -10, 0))} cx="12" cy="5" rx="9" ry="3" style={pivot(12, 5)} />
		</>
	),
});
