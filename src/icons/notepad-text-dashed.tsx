import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const binder = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const scatter = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "notepad-text-dashed",
	render: (part) => (
		<>
			<motion.path {...part(scatter(2, -2))} d="M16 4h2a2 2 0 0 1 2 2v2" />
			<motion.path {...part(scatter(3, 0))} d="M20 12v2" />
			<motion.path {...part(scatter(2, 2))} d="M20 18v2a2 2 0 0 1-2 2h-1" />
			<motion.path {...part(scatter(0, 3))} d="M13 22h-2" />
			<motion.path {...part(scatter(-2, 2))} d="M7 22H6a2 2 0 0 1-2-2v-2" />
			<motion.path {...part(scatter(-3, 0))} d="M4 14v-2" />
			<motion.path {...part(scatter(-2, -2))} d="M4 8V6a2 2 0 0 1 2-2h2" />
			<motion.path {...part(binder(0))} d="M8 2v4" />
			<motion.path {...part(binder(0.06))} d="M12 2v4" />
			<motion.path {...part(binder(0.12))} d="M16 2v4" />
			<motion.path {...part(redraw(0.15, 0.35))} d="M8 10h6" />
			<motion.path {...part(redraw(0.22, 0.35))} d="M8 14h8" />
			<motion.path {...part(redraw(0.29, 0.35))} d="M8 18h5" />
		</>
	),
});
