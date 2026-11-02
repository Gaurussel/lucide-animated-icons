import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-down",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1.5, 3.5, 0] }, { duration: 0.55, times: [0, 0.25, 0.6, 1] }))}>
			<path d="M12 5v14" />
			<path d="m19 12-7 7-7-7" />
		</motion.g>
	),
});
