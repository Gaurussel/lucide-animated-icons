import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const timing = { duration: 0.75, times: [0, 0.25, 0.6, 1] };

export default createAnimatedIcon({
	name: "plug",
	render: (part) => (
		<>
			<motion.path {...part(pose({ scaleY: [1, 0.8, 1.4, 1] }, timing))} d="M12 22v-5" style={edge(0.5, 1)} />
			<motion.g {...part(pose({ y: [0, 1, -2, 0] }, timing))}>
				<path d="M9 8V2" />
				<path d="M15 8V2" />
				<path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
			</motion.g>
		</>
	),
});
