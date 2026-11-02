import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const merge = (d: number) =>
	pose({ x: [0, d, 0], y: [0, d, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "blend",
	render: (part) => (
		<>
			<motion.circle {...part(merge(2.5))} cx="9" cy="9" r="7" />
			<motion.circle {...part(merge(-2.5))} cx="15" cy="15" r="7" />
		</>
	),
});
