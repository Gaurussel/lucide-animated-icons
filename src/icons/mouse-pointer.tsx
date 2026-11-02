import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const click = pose(
	{ x: [0, -2, 3, 0], y: [0, -2, 3, 0], scale: [1, 1.08, 0.82, 1] },
	{ duration: 0.65, times: [0, 0.18, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const tail = pose(
	{ x: [0, 0, 2, 0], y: [0, 0, 2, 0] },
	{ duration: 0.65, times: [0, 0.26, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "mouse-pointer",
	render: (part) => (
		<motion.g {...part(click)} style={pivot(3, 3)}>
			<motion.path {...part(tail)} d="M12.586 12.586 19 19" />
			<path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" />
		</motion.g>
	),
});
