import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const push = (x: number, delay: number) =>
	pose(
		{ x: [0, -x * 0.25, x, 0] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "code",
	render: (part) => (
		<>
			<motion.path {...part(push(-4, 0))} d="m8 6-6 6 6 6" />
			<motion.path {...part(push(4, 0.1))} d="m16 18 6-6-6-6" />
		</>
	),
});
