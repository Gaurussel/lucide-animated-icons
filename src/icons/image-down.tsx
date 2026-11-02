import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] });
const sun = pose({ y: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });
const arrow = pose({ y: [0, -1, 1, 0] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] });
const stroke = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] });

export default createAnimatedIcon({
	name: "image-down",
	render: (part) => (
		<>
			<motion.g {...part(press)} style={pivot(3, 21)}>
				<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
				<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
			</motion.g>
			<motion.g {...part(arrow)}>
				<motion.path {...part(stroke)} d="m14 19 3 3v-5.5" />
				<motion.path {...part(stroke)} d="m17 22 3-3" />
			</motion.g>
		</>
	),
});
