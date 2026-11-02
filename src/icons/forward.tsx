import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const head = pose({ x: [0, -1.5, 3, 3, 0] }, { duration: 0.75, times: [0, 0.18, 0.5, 0.65, 1] });
const tail = pose({ x: [0, -1, 1.5, 1.5, 0] }, { duration: 0.75, delay: 0.06, times: [0, 0.18, 0.5, 0.65, 1] });

export default createAnimatedIcon({
	name: "forward",
	render: (part) => (
		<>
			<motion.path {...part(head)} d="m15 17 5-5-5-5" />
			<motion.path {...part(tail)} d="M4 18v-2a4 4 0 0 1 4-4h12" />
		</>
	),
});
