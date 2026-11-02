import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const type = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay, times: [0, 0.2, 0.35, 1] });

export default createAnimatedIcon({
	name: "wrap-text",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 0] }, { duration: 0.35, delay: 0.45, times: [0, 0.45, 1] }))}
				d="m16 16-2 2 2 2"
			/>
			<motion.path {...part(type(0.15))} d="M3 12h15a3 3 0 1 1 0 6h-4" />
			<motion.path {...part(type(0.3))} d="M3 18h7" />
			<motion.path {...part(type(0))} d="M3 6h18" />
		</>
	),
});
