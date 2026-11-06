import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const node = (delay: number) =>
	pose({ scale: [1, 1.24, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "git-compare",
	render: (part) => (
		<>
			<motion.circle {...part(node(0.35))} cx="18" cy="18" r="3" style={centered} />
			<motion.circle {...part(node(0.45))} cx="6" cy="6" r="3" style={centered} />
			<motion.path {...part(redraw(0, 0.4))} d="M13 6h3a2 2 0 0 1 2 2v7" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M11 18H8a2 2 0 0 1-2-2V9" />
		</>
	),
});
