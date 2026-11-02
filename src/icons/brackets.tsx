import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const squeeze = (direction: number) =>
	pose({ x: [0, 4 * direction, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "brackets",
	render: (part) => (
		<>
			<motion.path {...part(squeeze(-1))} d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" />
			<motion.path {...part(squeeze(1))} d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" />
		</>
	),
});
