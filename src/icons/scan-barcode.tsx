import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const focus = (x: number, y: number) =>
	pose({ x: [0, 2 * x, 0], y: [0, 2 * y, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "scan-barcode",
	render: (part) => (
		<>
			<motion.path {...part(focus(1, 1))} d="M3 7V5a2 2 0 0 1 2-2h2" />
			<motion.path {...part(focus(-1, 1))} d="M17 3h2a2 2 0 0 1 2 2v2" />
			<motion.path {...part(focus(-1, -1))} d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<motion.path {...part(focus(1, -1))} d="M7 21H5a2 2 0 0 1-2-2v-2" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M8 7v10" />
			<motion.path {...part(redraw(0.18, 0.4))} d="M12 7v10" />
			<motion.path {...part(redraw(0.26, 0.4))} d="M17 7v10" />
		</>
	),
});
