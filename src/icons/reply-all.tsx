import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const dash = (delay: number) =>
	pose(
		{ x: [0, 2, -8, 6, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "reply-all",
	render: (part) => (
		<>
			<motion.g {...part(dash(0.08))}>
				<path d="m12 17-5-5 5-5" />
				<path d="M22 18v-2a4 4 0 0 0-4-4H7" />
			</motion.g>
			<motion.path {...part(dash(0))} d="m7 17-5-5 5-5" />
		</>
	),
});
