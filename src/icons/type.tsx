import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const stamp = pose(
	{ y: [0, -5, 1.5, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.3, 1], ease: ["easeInOut", "easeIn", springy] },
);
const jolt = pose(
	{ y: [0, 0, 2, 0] },
	{ duration: 0.72, times: [0, 0.28, 0.36, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "type",
	render: (part) => (
		<>
			<motion.path {...part(stamp)} d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
			<motion.path {...part(jolt)} d="M12 4v16" />
			<motion.path {...part(redraw(0.24, 0.42))} d="M9 20h6" />
		</>
	),
});
