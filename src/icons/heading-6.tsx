import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const write = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay, times: [0, 0.2, 0.35, 1] });

export default createAnimatedIcon({
	name: "heading-6",
	render: (part) => (
		<>
			<motion.path {...part(write(0))} d="M4 18V6" />
			<motion.path {...part(write(0.06))} d="M4 12h8" />
			<motion.path {...part(write(0.12))} d="M12 18V6" />
			<motion.path {...part(write(0.3))} d="M20 10c-2 2-3 3.5-3 6" />
			<motion.circle {...part(write(0.38))} cx="19" cy="16" r="2" />
		</>
	),
});
