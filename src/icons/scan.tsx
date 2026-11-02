import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const close = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, x, 0], y: [0, y, y, 0] }, { duration: 0.65, delay, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "scan",
	render: (part) => (
		<>
			<motion.path {...part(close(2, 2, 0))} d="M3 7V5a2 2 0 0 1 2-2h2" />
			<motion.path {...part(close(-2, 2, 0.06))} d="M17 3h2a2 2 0 0 1 2 2v2" />
			<motion.path {...part(close(-2, -2, 0.12))} d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<motion.path {...part(close(2, -2, 0.18))} d="M7 21H5a2 2 0 0 1-2-2v-2" />
		</>
	),
});
