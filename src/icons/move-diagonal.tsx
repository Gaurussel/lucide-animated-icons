import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const push = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "move-diagonal",
	render: (part) => (
		<>
			<path d="M19 5 5 19" />
			<motion.path {...part(push(-3, 3))} d="M11 19H5v-6" />
			<motion.path {...part(push(3, -3))} d="M13 5h6v6" />
		</>
	),
});
