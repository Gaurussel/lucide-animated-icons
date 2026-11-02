import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ship",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -4, 4, -2, 0] }, { duration: 0.9, times: [0, 0.25, 0.55, 0.8, 1] }))}
				style={pivot(12, 21)}
			>
				<motion.g {...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}>
					<path d="M12 10.189V14" />
					<path d="M12 2v3" />
				</motion.g>
				<path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
				<path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 2, -2, 0] }, { duration: 0.9, times: [0, 0.35, 0.7, 1] }))}>
				<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
			</motion.g>
		</>
	),
});
