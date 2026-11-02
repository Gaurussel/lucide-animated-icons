import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];
const options = { duration: 0.75, times };

export default createAnimatedIcon({
	name: "unfold-horizontal",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1, 2.5, 2.5, 0] }, options))}>
				<path d="M16 12h6" />
				<path d="m19 15 3-3-3-3" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 1, -2.5, -2.5, 0] }, options))}>
				<path d="M8 12H2" />
				<path d="m5 9-3 3 3 3" />
			</motion.g>
			<motion.g {...part(pose({ opacity: [1, 1, 0.3, 0.3, 1] }, options))}>
				<path d="M12 2v2" />
				<path d="M12 8v2" />
				<path d="M12 14v2" />
				<path d="M12 20v2" />
			</motion.g>
		</>
	),
});
