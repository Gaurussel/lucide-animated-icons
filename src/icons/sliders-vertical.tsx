import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const knob = (distance: number, delay: number) =>
	pose(
		{ y: [0, distance, -distance * 0.4, 0] },
		{ duration: 0.7, delay, times: [0, 0.25, 0.45, 1], ease: [snap, "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "sliders-vertical",
	render: (part) => (
		<>
			<motion.line {...part(knob(-3, 0))} x1="4" x2="4" y1="21" y2="14" />
			<motion.line {...part(knob(-3, 0))} x1="4" x2="4" y1="10" y2="3" />
			<motion.line {...part(knob(3, 0.1))} x1="12" x2="12" y1="21" y2="12" />
			<motion.line {...part(knob(3, 0.1))} x1="12" x2="12" y1="8" y2="3" />
			<motion.line {...part(knob(-3, 0.2))} x1="20" x2="20" y1="21" y2="16" />
			<motion.line {...part(knob(-3, 0.2))} x1="20" x2="20" y1="12" y2="3" />
			<motion.line {...part(knob(-9, 0))} x1="2" x2="6" y1="14" y2="14" />
			<motion.line {...part(knob(9, 0.1))} x1="10" x2="14" y1="8" y2="8" />
			<motion.line {...part(knob(-9, 0.2))} x1="18" x2="22" y1="16" y2="16" />
		</>
	),
});
