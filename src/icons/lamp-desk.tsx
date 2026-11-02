import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const sway = pose({ rotate: [0, -6, 5, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] });
const base = pose({ scaleY: [1, 0.9, 1, 1] }, { duration: 0.85, times: [0, 0.15, 0.35, 1] });
const glow = pose({ opacity: [1, 1, 0.4, 1] }, { duration: 0.85, times: [0, 0.5, 0.7, 1] });

export default createAnimatedIcon({
	name: "lamp-desk",
	render: (part) => (
		<>
			<motion.path
				{...part(base)}
				d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(sway)} style={pivot(7, 18)}>
				<motion.path
					{...part(glow)}
					d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"
				/>
				<motion.path {...part(glow)} d="m14.207 4.793-3.414 3.414" />
				<path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" />
			</motion.g>
		</>
	),
});
