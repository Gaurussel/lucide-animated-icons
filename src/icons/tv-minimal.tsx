import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0], rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "tv-minimal",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.15, 0.5))} d="M7 21h10" />
			<motion.rect {...part(lift)} height="14" rx="2" style={pivot(12, 17)} width="20" x="2" y="3" />
		</>
	),
});
