import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const toggle = pose({ x: [0, 3, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "option",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.6))} d="M3 3h6l6 18h6" />
			<motion.path {...part(toggle)} d="M14 3h7" />
		</>
	),
});
