import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const dash = (delay: number) =>
	pose(
		{ x: [0, 1.2, -4.8, 3.6, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.62, delay, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "reply",
	render: (part) => (
		<>
			<motion.path {...part(dash(0.08))} d="M20 18v-2a4 4 0 0 0-4-4H4" />
			<motion.path {...part(dash(0))} d="m9 17-5-5 5-5" />
		</>
	),
});
