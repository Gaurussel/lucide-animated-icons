import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "plus",
	render: (part) => (
		<motion.g {...part(pose({ scale: [1, 0.7, 1] }, { duration: 0.5, delay: 0.1 }))} style={centered}>
			<motion.path {...part(pose({ scaleX: [1, 0.15, 1] }, { duration: 0.4 }))} d="M5 12h14" style={centered} />
			<motion.path
				{...part(pose({ scaleY: [1, 0.15, 1] }, { duration: 0.4, delay: 0.2 }))}
				d="M12 5v14"
				style={centered}
			/>
		</motion.g>
	),
});
