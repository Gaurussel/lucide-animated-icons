import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const sway = pose({ rotate: [0, -4, 3, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] });
const grain = (index: number) => pose({ scale: [1, 1.2, 1] }, { duration: 0.4, delay: index * 0.08 });

export default createAnimatedIcon({
	name: "wheat",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(2, 22)}>
			<path d="M2 22 16 8" />
			<motion.path
				{...part(grain(0))}
				d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
				style={centered}
			/>
			<motion.path
				{...part(grain(1))}
				d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
				style={centered}
			/>
			<motion.path
				{...part(grain(2))}
				d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
				style={centered}
			/>
			<motion.path {...part(grain(3))} d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" style={centered} />
			<motion.path
				{...part(grain(0))}
				d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
				style={centered}
			/>
			<motion.path
				{...part(grain(1))}
				d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
				style={centered}
			/>
			<motion.path
				{...part(grain(2))}
				d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
				style={centered}
			/>
		</motion.g>
	),
});
