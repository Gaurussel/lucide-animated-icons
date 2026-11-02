import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, 1.5, -5, 0, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.32, 0.48, 1], ease: ["easeInOut", "easeOut", "easeIn", "easeInOut"] },
);
const tape = pose(
	{ y: [0, 1.5, -9, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.42, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "package",
	render: (part) => (
		<>
			<motion.g {...part(leap)}>
				<motion.g {...part(jelly(0.48, 0.7))} style={edge(0.5, 1)}>
					<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
					<path d="M12 22V12" />
					<polyline points="3.29 7 12 12 20.71 7" />
				</motion.g>
			</motion.g>
			<motion.g {...part(tape)}>
				<motion.path {...part(redraw(0.4, 0.3))} d="m7.5 4.27 9 5.15" />
			</motion.g>
		</>
	),
});
