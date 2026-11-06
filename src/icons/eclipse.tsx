import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const pass = pose(
	{ rotate: [0, 3.62, 0] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "eclipse",
	render: (part) => (
		<>
			<motion.circle {...part(redraw(0.3, 0.42))} cx="12" cy="12" r="10" />
			<motion.path {...part(pass)} d="M12 2a7 7 0 1 0 10 10" style={pivot(12, 12)} />
		</>
	),
});
