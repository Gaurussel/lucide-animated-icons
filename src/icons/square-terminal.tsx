import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const prompt = pose({ x: [0, 3, 0] }, { duration: 0.65, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-terminal",
	render: (part) => (
		<>
			<motion.path {...part(prompt)} d="m7 11 2-2-2-2" />
			<motion.path {...part(redraw(0.15, 0.4))} d="M11 13h4" />
			<motion.rect {...part(jelly(0.4, 0.7))} height="18" rx="2" ry="2" style={centered} width="18" x="3" y="3" />
		</>
	),
});
