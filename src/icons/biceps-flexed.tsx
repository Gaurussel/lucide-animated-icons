import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "biceps-flexed",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -6, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(8, 20)}
			>
				<path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
				<path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 1.2, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M15 14a5 5 0 0 0-7.584 2"
				style={centered}
			/>
		</>
	),
});
