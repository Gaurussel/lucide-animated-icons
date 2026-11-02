import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const push = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "move",
	render: (part) => (
		<>
			<path d="M12 2v20" />
			<path d="M2 12h20" />
			<motion.path {...part(push(0, -3))} d="m9 5 3-3 3 3" />
			<motion.path {...part(push(0, 3))} d="m15 19-3 3-3-3" />
			<motion.path {...part(push(-3, 0))} d="m5 9-3 3 3 3" />
			<motion.path {...part(push(3, 0))} d="m19 9 3 3-3 3" />
		</>
	),
});
