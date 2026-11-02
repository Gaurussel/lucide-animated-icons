import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const branch = (direction: number) =>
	pose({ x: [0, 3 * direction, 0], y: [0, -3, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "split",
	render: (part) => (
		<>
			<motion.g {...part(branch(1))}>
				<path d="M16 3h5v5" />
				<path d="m15 9 6-6" />
			</motion.g>
			<motion.path {...part(branch(-1))} d="M8 3H3v5" />
			<path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
		</>
	),
});
