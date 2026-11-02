import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.2, 0.4, 0.6, 0.82, 1];

export default createAnimatedIcon({
	name: "view",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.4, 1] }))}
				style={centered}
			>
				<path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
				<path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
			</motion.g>
			<motion.g {...part(pose({ scaleY: [1, 1, 0.1, 1, 1, 1] }, { duration: 0.9, times }))} style={centered}>
				<motion.circle
					{...part(pose({ x: [0, 0, 0, -2, 2, 0] }, { duration: 0.9, times }))}
					cx="12"
					cy="12"
					r="1"
				/>
				<path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
			</motion.g>
		</>
	),
});
