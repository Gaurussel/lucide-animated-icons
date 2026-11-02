import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const push = (y: number) =>
	pose({ y: [0, -y / 3, y, 0] }, { duration: 0.72, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, rubber] });
const spread = (x: number) =>
	pose({ x: [0, 0, x, 0] }, { duration: 0.72, times: [0, 0.22, 0.36, 1], ease: ["easeInOut", snap, rubber] });

export default createAnimatedIcon({
	name: "unfold-vertical",
	render: (part) => (
		<>
			<motion.g {...part(push(3.5))}>
				<path d="M12 22v-6" />
				<path d="m15 19-3 3-3-3" />
			</motion.g>
			<motion.g {...part(push(-3.5))}>
				<path d="M12 8V2" />
				<path d="m15 5-3-3-3 3" />
			</motion.g>
			<motion.path {...part(spread(-1.5))} d="M4 12H2" />
			<motion.path {...part(spread(-0.8))} d="M10 12H8" />
			<motion.path {...part(spread(0.8))} d="M16 12h-2" />
			<motion.path {...part(spread(1.5))} d="M22 12h-2" />
		</>
	),
});
