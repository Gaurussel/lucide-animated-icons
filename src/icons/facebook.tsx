import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "facebook",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1], rotate: [0, -6, 0] }, { duration: 0.6, times: [0, 0.4, 1] }))}
				style={centered}
			>
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
			</motion.g>
		</>
	),
});
