import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const write = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay, times: [0, 0.2, 0.35, 1] });

export default createAnimatedIcon({
	name: "heading-3",
	render: (part) => (
		<>
			<motion.path {...part(write(0))} d="M4 18V6" />
			<motion.path {...part(write(0.06))} d="M4 12h8" />
			<motion.path {...part(write(0.12))} d="M12 18V6" />
			<motion.path {...part(write(0.3))} d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
			<motion.path {...part(write(0.38))} d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
		</>
	),
});
