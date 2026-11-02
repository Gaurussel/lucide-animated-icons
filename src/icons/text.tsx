import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const row = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay, times: [0, 0.2, 0.4, 1] });

export default createAnimatedIcon({
	name: "text",
	render: (part) => (
		<>
			<motion.path {...part(row(0.2))} d="M15 18H3" />
			<motion.path {...part(row(0))} d="M17 6H3" />
			<motion.path {...part(row(0.1))} d="M21 12H3" />
		</>
	),
});
