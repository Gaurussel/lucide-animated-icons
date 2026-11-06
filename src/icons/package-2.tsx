import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, 0.9, -3, 0, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.32, 0.48, 1], ease: ["easeInOut", "easeOut", "easeIn", "easeInOut"] },
);
const tape = pose(
	{ y: [0, 0.9, -5.4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.42, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "package-2",
	render: (part) => (
		<>
			<motion.g {...part(leap)}>
				<motion.g {...part(jelly(0.48, 0.7))} style={edge(0.5, 1)}>
					<path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" />
					<path d="M3.054 9.013h17.893" />
				</motion.g>
			</motion.g>
			<motion.g {...part(tape)}>
				<motion.path {...part(redraw(0.4, 0.3))} d="M12 3v6" />
			</motion.g>
		</>
	),
});
