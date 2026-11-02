import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const glide = pose({ x: [0, -3, 0], y: [0, 3, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "tangent",
	render: (part) => (
		<>
			<motion.g {...part(glide)}>
				<circle cx="17" cy="4" r="2" />
				<path d="M15.59 5.41 5.41 15.59" />
				<circle cx="4" cy="17" r="2" />
			</motion.g>
			<motion.path {...part(redraw(0, 0.55))} d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
		</>
	),
});
