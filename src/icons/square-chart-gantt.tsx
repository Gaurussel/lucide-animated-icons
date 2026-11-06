import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, snap, springy } from "../helpers.ts";

const slide = (delay: number) =>
	pose({ x: [0, 1.8, 0] }, { duration: 0.55, delay, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-chart-gantt",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.5, 0.72))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.path {...part(slide(0))} d="M9 8h7" />
			<motion.path {...part(slide(0.08))} d="M8 12h6" />
			<motion.path {...part(slide(0.16))} d="M11 16h5" />
		</>
	),
});
