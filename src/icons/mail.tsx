import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const flap = pose({ scaleY: [1, -0.02, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "mail",
	render: (part) => (
		<motion.g {...part(jelly(0.02, 0.65))} style={edge(0.5, 1)}>
			<motion.path {...part(flap)} d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" style={edge(0.5, 0)} />
			<rect height="16" rx="2" width="20" x="2" y="4" />
		</motion.g>
	),
});
