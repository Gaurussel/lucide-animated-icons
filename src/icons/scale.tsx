import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { type PoseOptions, pivot, pose, ring, snap } from "../helpers.ts";

const timing: PoseOptions = { duration: 0.75, times: [0, 0.1, 0.22, 1], ease: ["easeInOut", snap, ring] };
const swing = (delay: number) =>
	pose(
		{ rotate: [0, 0, 14, 0] },
		{ duration: 0.7, delay, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "scale",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, 4, -14, 0] }, timing))}
				d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
				style={pivot(12, 5)}
			/>
			<motion.g {...part(pose({ y: [0, 0.5, 2, 0] }, timing))}>
				<motion.path
					{...part(swing(0.08))}
					d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
					style={pivot(5, 8)}
				/>
			</motion.g>
			<motion.g {...part(pose({ y: [0, -0.5, -2, 0] }, timing))}>
				<motion.path
					{...part(swing(0.12))}
					d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
					style={pivot(19, 8)}
				/>
			</motion.g>
			<path d="M7 21h10" />
			<path d="M12 3v18" />
		</>
	),
});
