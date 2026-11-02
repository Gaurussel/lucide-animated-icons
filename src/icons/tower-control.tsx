import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tower-control",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scaleX: [1, 0.75, 1] }, { duration: 0.7, times: [0, 0.5, 1] }))} style={centered}>
				<path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
				<path d="m9 6 1 7" />
				<path d="m15 6-1 7" />
			</motion.g>
			<path d="M8 13v9" />
			<path d="M16 22v-9" />
			<motion.g
				{...part(pose({ rotate: [0, -16, 16, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				style={pivot(12, 6)}
			>
				<path d="M12 6V2" />
				<path d="M13 2h-2" />
			</motion.g>
		</>
	),
});
