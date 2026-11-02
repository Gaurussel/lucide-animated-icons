import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const tick = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay, times: [0, 0.3, 0.4, 1] });

export default createAnimatedIcon({
	name: "check-check",
	render: (part) => (
		<>
			<motion.path {...part(tick(0))} d="M18 6 7 17l-5-5" />
			<motion.path {...part(tick(0.18))} d="m22 10-7.5 7.5L13 16" />
		</>
	),
});
