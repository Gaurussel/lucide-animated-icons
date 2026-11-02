import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const nudge = (x: number, y: number, delay = 0) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.65, delay, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "chevrons-left",
	render: (part) => (
		<>
			<motion.path {...part(nudge(-4, 0))} d="m11 17-5-5 5-5" />
			<motion.path {...part(nudge(-4, 0, 0.08))} d="m18 17-5-5 5-5" />
		</>
	),
});
