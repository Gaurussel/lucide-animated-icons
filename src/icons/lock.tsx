import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const shackle = pose({ y: [0, -3, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "lock",
	render: (part) => (
		<>
			<motion.rect
				{...part(jelly(0.36, 0.65))}
				height="11"
				rx="2"
				ry="2"
				style={edge(0.5, 1)}
				width="18"
				x="3"
				y="11"
			/>
			<motion.path {...part(shackle)} d="M7 11V7a5 5 0 0 1 10 0v4" />
		</>
	),
});
