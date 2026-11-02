import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];
const options = { duration: 0.75, times };
const down = pose({ y: [0, -1, 2.5, 2.5, 0] }, options);
const up = pose({ y: [0, 1, -2.5, -2.5, 0] }, options);

export default createAnimatedIcon({
	name: "unfold-vertical",
	render: (part) => (
		<>
			<motion.path {...part(down)} d="M12 22v-6" />
			<motion.path {...part(up)} d="M12 8V2" />
			<motion.g {...part(pose({ opacity: [1, 1, 0.3, 0.3, 1] }, options))}>
				<path d="M4 12H2" />
				<path d="M10 12H8" />
				<path d="M16 12h-2" />
				<path d="M22 12h-2" />
			</motion.g>
			<motion.path {...part(down)} d="m15 19-3 3-3-3" />
			<motion.path {...part(up)} d="m15 5-3-3-3 3" />
		</>
	),
});
