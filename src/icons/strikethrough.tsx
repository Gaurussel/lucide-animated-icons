import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const shift = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.68, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "strikethrough",
	render: (part) => (
		<>
			<motion.path {...part(shift(-1))} d="M16 4H9a3 3 0 0 0-2.83 4" />
			<motion.path {...part(shift(1))} d="M14 12a4 4 0 0 1 0 8H6" />
			<motion.line {...part(redraw(0.05, 0.45))} x1="4" x2="20" y1="12" y2="12" />
		</>
	),
});
