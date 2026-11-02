import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.2, 0.45, 0.7, 1] };
const offer = (delay: number) => pose({ y: [0, 0.8, -2.5, -2.5, 0], rotate: [0, 0, -5, -5, 0] }, { ...phase, delay });

export default createAnimatedIcon({
	name: "hand-helping",
	render: (part) => (
		<>
			<motion.g {...part(offer(0))} style={pivot(3, 14)}>
				<path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
				<path d="m2 13 6 6" />
			</motion.g>
			<motion.path
				{...part(offer(0.06))}
				d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
				style={pivot(3, 14)}
			/>
		</>
	),
});
