import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const dash = (delay: number) =>
	pose(
		{ x: [0, -2, 12, -10, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "fast-forward",
	render: (part) => (
		<>
			<motion.polygon {...part(dash(0))} points="13 19 22 12 13 5 13 19" />
			<motion.polygon {...part(dash(0.07))} points="2 19 11 12 2 5 2 19" />
		</>
	),
});
