import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const knob = (distance: number, delay: number) =>
	pose(
		{ x: [0, distance, -distance * 0.4, 0] },
		{ duration: 0.7, delay, times: [0, 0.25, 0.45, 1], ease: [snap, "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "sliders-horizontal",
	render: (part) => (
		<>
			<motion.line {...part(knob(-3, 0))} x1="21" x2="14" y1="4" y2="4" />
			<motion.line {...part(knob(-3, 0))} x1="10" x2="3" y1="4" y2="4" />
			<motion.line {...part(knob(3, 0.1))} x1="21" x2="12" y1="12" y2="12" />
			<motion.line {...part(knob(3, 0.1))} x1="8" x2="3" y1="12" y2="12" />
			<motion.line {...part(knob(-3, 0.2))} x1="21" x2="16" y1="20" y2="20" />
			<motion.line {...part(knob(-3, 0.2))} x1="12" x2="3" y1="20" y2="20" />
			<motion.line {...part(knob(-9, 0))} x1="14" x2="14" y1="2" y2="6" />
			<motion.line {...part(knob(9, 0.1))} x1="8" x2="8" y1="10" y2="14" />
			<motion.line {...part(knob(-9, 0.2))} x1="16" x2="16" y1="18" y2="22" />
		</>
	),
});
