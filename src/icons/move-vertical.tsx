import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const push = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "move-vertical",
	render: (part) => (
		<>
			<path d="M12 2v20" />
			<motion.path {...part(push(0, -3))} d="m8 6 4-4 4 4" />
			<motion.path {...part(push(0, 3))} d="m8 18 4 4 4-4" />
		</>
	),
});
