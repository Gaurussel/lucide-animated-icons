import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "spool",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -5, 5, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(12, 12)}
			>
				<motion.g {...part(pose({ x: [0, 2, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}>
					<path d="M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66" />
				</motion.g>
				<motion.g {...part(pose({ x: [0, -2, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}>
					<path d="m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178" />
				</motion.g>
			</motion.g>
		</>
	),
});
