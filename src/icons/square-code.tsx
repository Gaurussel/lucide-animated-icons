import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const spread = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.68, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-code",
	render: (part) => (
		<>
			<motion.path {...part(spread(-1))} d="m10 9-3 3 3 3" />
			<motion.path {...part(spread(1))} d="m14 15 3-3-3-3" />
			<rect height="18" rx="2" width="18" x="3" y="3" />
		</>
	),
});
