import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const pull = (x: number, y: number) =>
	pose({ x: [0, 3 * x, 0], y: [0, 3 * y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "shrink",
	render: (part) => (
		<>
			<motion.path {...part(pull(-1, -1))} d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
			<motion.path {...part(pull(1, -1))} d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
			<motion.path {...part(pull(-1, 1))} d="M15 4.2V9m0 0h4.8M15 9l6-6" />
			<motion.path {...part(pull(1, 1))} d="M9 4.2V9m0 0H4.2M9 9 3 3" />
		</>
	),
});
