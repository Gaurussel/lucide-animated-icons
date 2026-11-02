import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "paw-print",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ y: [0, -3, 0, 0], rotate: [0, -12, 0, 0] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }),
				)}
				style={centered}
			>
				<motion.circle
					{...part(pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.8, times: [0, 0.65, 0.8, 1] }))}
					cx="11"
					cy="4"
					r="2"
					style={centered}
				/>
				<motion.circle
					{...part(pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.8, times: [0, 0.65, 0.8, 1], delay: 0.05 }))}
					cx="18"
					cy="8"
					r="2"
					style={centered}
				/>
				<motion.circle
					{...part(pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.8, times: [0, 0.65, 0.8, 1], delay: 0.1 }))}
					cx="20"
					cy="16"
					r="2"
					style={centered}
				/>
				<path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
			</motion.g>
		</>
	),
});
