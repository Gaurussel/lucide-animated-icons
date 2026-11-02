import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const write = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay, times: [0, 0.2, 0.35, 1] });

export default createAnimatedIcon({
	name: "heading-5",
	render: (part) => (
		<>
			<motion.path {...part(write(0))} d="M4 18V6" />
			<motion.path {...part(write(0.06))} d="M4 12h8" />
			<motion.path {...part(write(0.12))} d="M12 18V6" />
			<motion.path {...part(write(0.3))} d="M17 13v-3h4" />
			<motion.path {...part(write(0.38))} d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
		</>
	),
});
