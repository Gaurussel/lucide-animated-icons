import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const knob = (direction: number, delay: number) =>
	pose({ x: [0, 8 * direction, 0] }, { duration: 0.65, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "settings-2",
	render: (part) => (
		<>
			<path d="M14 17H5" />
			<path d="M19 7h-9" />
			<motion.circle {...part(knob(-1, 0.06))} cx="17" cy="17" r="3" />
			<motion.circle {...part(knob(1, 0))} cx="7" cy="7" r="3" />
		</>
	),
});
