import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const flow = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.6, delay, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "text",
	render: (part) => (
		<>
			<motion.path {...part(flow(4, 0))} d="M17 6H3" />
			<motion.path {...part(flow(-3, 0.06))} d="M21 12H3" />
			<motion.path {...part(flow(5, 0.12))} d="M15 18H3" />
		</>
	),
});
