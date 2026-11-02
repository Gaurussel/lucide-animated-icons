import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "map-plus",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
				<path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" />
				<path d="M15 5.764V12" />
				<path d="M9 3.236v15" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] }))}
				d="M18 15v6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.65, 1] }))}
				d="M21 18h-6"
			/>
		</>
	),
});
