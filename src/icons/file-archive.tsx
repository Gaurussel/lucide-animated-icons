import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const body = pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });
const pull = pose({ y: [0, 1, -5, 0] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] });
const tooth = (delay: number) => pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.8, delay, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "file-archive",
	render: (part) => (
		<motion.g {...part(body)}>
			<motion.path {...part(tooth(0.2))} d="M10 12v-1" />
			<motion.path {...part(tooth(0.1))} d="M10 18v-2" />
			<motion.path {...part(tooth(0.3))} d="M10 7V6" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" />
			<motion.circle {...part(pull)} cx="10" cy="20" r="2" />
		</motion.g>
	),
});
