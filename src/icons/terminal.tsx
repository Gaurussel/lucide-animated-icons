import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const prompt = pose({ x: [0, 4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "terminal",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.12, 0.58))} d="M12 19h8" />
			<motion.path {...part(prompt)} d="m4 17 6-6-6-6" />
		</>
	),
});
