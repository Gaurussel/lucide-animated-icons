import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const orbit = pose(
	{ x: [0, -2, 0, 2, 0], y: [0, 0, -2, 0, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "squircle",
	render: (part) => (
		<motion.g {...part(orbit)}>
			<motion.path {...part(redraw(0, 0.5))} d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
		</motion.g>
	),
});
