import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.3, 0.65, 1];
const pull = (delay: number) => pose({ x: [0, 3, 3, 0] }, { duration: 0.8, delay, times });
const led = (delay: number) =>
	pose({ opacity: [1, 0.15, 1, 0.15, 1] }, { duration: 0.8, delay, times: [0, 0.3, 0.5, 0.7, 1] });

export default createAnimatedIcon({
	name: "server",
	render: (part) => (
		<>
			<motion.g {...part(pull(0))}>
				<rect height="8" rx="2" ry="2" width="20" x="2" y="2" />
				<motion.line {...part(led(0))} x1="6" x2="6.01" y1="6" y2="6" />
			</motion.g>
			<motion.g {...part(pull(0.12))}>
				<rect height="8" rx="2" ry="2" width="20" x="2" y="14" />
				<motion.line {...part(led(0.12))} x1="6" x2="6.01" y1="18" y2="18" />
			</motion.g>
		</>
	),
});
