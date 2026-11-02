import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, snap, springy } from "../helpers.ts";

const spread = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.68, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-equal",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.4, 0.68))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.path {...part(spread(-1))} d="M7 10h10" />
			<motion.path {...part(spread(1))} d="M7 14h10" />
		</>
	),
});
