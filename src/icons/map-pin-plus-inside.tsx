import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "map-pin-plus-inside",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}>
			<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
				d="M9 10h6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.6, 0.7999999999999999, 1] }))}
				d="M12 7v6"
				style={centered}
			/>
		</motion.g>
	),
});
