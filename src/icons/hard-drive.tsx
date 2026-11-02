import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const led = (delay: number) => pose({ opacity: [1, 0.15, 1, 1] }, { duration: 0.8, delay, times: [0, 0.2, 0.4, 1] });

export default createAnimatedIcon({
	name: "hard-drive",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, 1, -2, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}>
			<line x1="22" x2="2" y1="12" y2="12" />
			<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
			<motion.line {...part(led(0.2))} x1="6" x2="6.01" y1="16" y2="16" />
			<motion.line {...part(led(0.4))} x1="10" x2="10.01" y1="16" y2="16" />
		</motion.g>
	),
});
