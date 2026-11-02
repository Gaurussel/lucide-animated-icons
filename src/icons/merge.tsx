import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const rise = pose(
	{ y: [0, 2, -8, 6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const join = pose({ x: [0, -2, 0], y: [0, -2, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "merge",
	render: (part) => (
		<>
			<motion.path {...part(rise)} d="m8 6 4-4 4 4" />
			<motion.path {...part(redraw(0.05, 0.5))} d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
			<motion.path {...part(join)} d="m20 22-5-5" />
		</>
	),
});
