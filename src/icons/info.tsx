import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.35, 0.6, 1] };

export default createAnimatedIcon({
	name: "info",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1, 0.93, 1] }, timing))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.path {...part(pose({ scaleY: [1, 1, 0.65, 1] }, timing))} d="M12 16v-4" style={edge(0.5, 1)} />
			<motion.path {...part(pose({ y: [0, -2.5, 0, 0] }, timing))} d="M12 8h.01" />
		</>
	),
});
