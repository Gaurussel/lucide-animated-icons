import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "map-pin-plus",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}>
				<path d="M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" />
				<motion.circle
					{...part(pose({ scale: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
					cx="12"
					cy="10"
					r="3"
					style={centered}
				/>
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				d="M16 18h6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
				d="M19 15v6"
				style={centered}
			/>
		</>
	),
});
