import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] };
const coin = (rise: number, delay: number) =>
	pose({ y: [0, rise, rise, 0, 0], opacity: [1, 1, 1, 1, 1] }, { ...phase, delay });

export default createAnimatedIcon({
	name: "hand-coins",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: [0, 0, 0, -8, 0], y: [0, 0, 0, 0.8, 0] }, phase))} style={pivot(2, 22)}>
				<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
				<path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
				<path d="m2 16 6 6" />
			</motion.g>
			<motion.circle {...part(coin(-3, 0.05))} cx="16" cy="9" r="2.9" />
			<motion.circle {...part(coin(-2.5, 0))} cx="6" cy="5" r="3" />
		</>
	),
});
