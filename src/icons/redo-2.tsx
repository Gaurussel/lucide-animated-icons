import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const flick = pose({ x: [0, 2.4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "redo-2",
	render: (part) => (
		<>
			<motion.path {...part(flick)} d="m15 14 5-5-5-5" />
			<motion.path {...part(redraw(0, 0.6))} d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />
		</>
	),
});
