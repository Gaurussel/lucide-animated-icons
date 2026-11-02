import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const write = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay, times: [0, 0.2, 0.35, 1] });

export default createAnimatedIcon({
	name: "heading-2",
	render: (part) => (
		<>
			<motion.path {...part(write(0))} d="M4 18V6" />
			<motion.path {...part(write(0.06))} d="M4 12h8" />
			<motion.path {...part(write(0.12))} d="M12 18V6" />
			<motion.path {...part(write(0.3))} d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
		</>
	),
});
