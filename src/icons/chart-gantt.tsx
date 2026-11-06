import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const shift = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.65, delay, times: [0, 0.3, 1], ease: [snap, rubber] });
const axis = pose({ x: [0, -0.9, 0], y: [0, 0.9, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "chart-gantt",
	render: (part) => (
		<>
			<motion.path {...part(shift(-4, 0))} d="M10 6h8" />
			<motion.path {...part(shift(-4, 0.12))} d="M12 16h6" />
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.path {...part(shift(4, 0.06))} d="M8 11h7" />
		</>
	),
});
