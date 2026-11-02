import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const shift = (x: number, y: number, delay: number) =>
	pose(
		{ x: [0, -x * 0.2, x, 0], y: [0, 0, y, 0] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "equal",
	render: (part) => (
		<>
			<motion.line {...part(shift(-6, 2, 0))} x1="5" x2="19" y1="9" y2="9" />
			<motion.line {...part(shift(6, -2, 0.1))} x1="5" x2="19" y1="15" y2="15" />
		</>
	),
});
