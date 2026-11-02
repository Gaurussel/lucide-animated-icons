import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const pull = (direction: number) =>
	pose({ x: [0, 4 * direction, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "stretch-horizontal",
	render: (part) => (
		<>
			<motion.rect {...part(pull(-1))} height="6" rx="2" width="20" x="2" y="4" />
			<motion.rect {...part(pull(1))} height="6" rx="2" width="20" x="2" y="14" />
		</>
	),
});
