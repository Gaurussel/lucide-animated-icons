import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const strike = pose(
	{ rotate: [0, 6, -8.4, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", "easeIn", ring] },
);
const knocked = pose(
	{ rotate: [0, 0, -13.2, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);
const leaf = pose(
	{ rotate: [0, 0, 12, 0] },
	{ duration: 0.75, delay: 0.1, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "cherry",
	render: (part) => (
		<>
			<motion.g {...part(strike)} style={pivot(12, 2)}>
				<path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
			</motion.g>
			<motion.g {...part(knocked)} style={pivot(12, 2)}>
				<path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
			</motion.g>
			<path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
			<motion.path {...part(leaf)} d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" style={pivot(12, 2)} />
		</>
	),
});
