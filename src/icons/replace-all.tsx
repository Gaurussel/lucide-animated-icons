import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const timing = { duration: 0.75, times: [0, 0.2, 0.5, 1] };
const swap = (delay: number) => pose({ scale: [1, 0.75, 1] }, { duration: 0.4, delay });

export default createAnimatedIcon({
	name: "replace-all",
	render: (part) => (
		<>
			<motion.path {...part(swap(0.3))} d="M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" style={centered} />
			<motion.g {...part(pose({ scale: [1, 1, 0.85, 1] }, timing))} style={centered}>
				<path d="M14 4a2 2 0 0 1 2-2" />
				<path d="M16 10a2 2 0 0 1-2-2" />
				<path d="M20 2a2 2 0 0 1 2 2" />
				<path d="M22 8a2 2 0 0 1-2 2" />
			</motion.g>
			<motion.path {...part(swap(0.3))} d="M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" style={centered} />
			<motion.g {...part(pose({ y: [0, -1, 2, 0] }, timing))}>
				<path d="m3 7 3 3 3-3" />
				<path d="M6 10V5a 3 3 0 0 1 3-3h1" />
			</motion.g>
			<motion.rect {...part(swap(0.2))} height="8" rx="2" style={centered} width="8" x="2" y="14" />
		</>
	),
});
