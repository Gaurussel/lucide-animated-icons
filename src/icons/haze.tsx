import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap, springy } from "../helpers.ts";

const rise = pose({ y: [0, 2.4, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });
const drift = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "haze",
	render: (part) => (
		<>
			<motion.g {...part(rise)}>
				<motion.path {...part(redraw(0.25, 0.4))} d="m5.2 6.2 1.4 1.4" />
				<motion.path {...part(redraw(0.25, 0.4))} d="M2 13h2" />
				<motion.path {...part(redraw(0.25, 0.4))} d="M20 13h2" />
				<motion.path {...part(redraw(0.25, 0.4))} d="m17.4 7.6 1.4-1.4" />
				<motion.path {...part(redraw(0.25, 0.4))} d="M12 5V2.5" />
				<path d="M16 13a4 4 0 0 0-8 0" />
			</motion.g>
			<motion.path {...part(drift(1))} d="M22 17H2" />
			<motion.path {...part(drift(-1))} d="M22 21H2" />
		</>
	),
});
