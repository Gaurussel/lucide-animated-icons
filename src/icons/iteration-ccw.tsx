import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const trace = pose({ pathLength: [1, 0, 1] }, { duration: 0.8, times: [0, 0.4, 1] });
const head = pose({ x: [0, -3, 0] }, { duration: 0.8, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "iteration-ccw",
	render: (part) => (
		<>
			<motion.path {...part(head)} d="m16 14 4 4-4 4" />
			<motion.path {...part(trace)} d="M20 10a8 8 0 1 0-8 8h8" />
		</>
	),
});
