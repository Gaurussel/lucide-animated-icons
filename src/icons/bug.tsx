import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const step = { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1] };
const legs = (direction: number) => pose({ rotate: [0, 12 * direction, -12 * direction, 8 * direction, 0] }, step);

export default createAnimatedIcon({
	name: "bug",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1, 0, -1, 0] }, step))}>
			<motion.g {...part(pose({ rotate: [0, -10, 10, -6, 0] }, { ...step, delay: 0.05 }))} style={pivot(12, 6)}>
				<path d="m8 2 1.88 1.88" />
				<path d="M14.12 3.88 16 2" />
			</motion.g>
			<path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
			<path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
			<path d="M12 20v-9" />
			<motion.g {...part(legs(1))} style={pivot(6, 13)}>
				<path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
				<path d="M6 13H2" />
				<path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
			</motion.g>
			<motion.g {...part(legs(-1))} style={pivot(18, 13)}>
				<path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
				<path d="M22 13h-4" />
				<path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
			</motion.g>
		</motion.g>
	),
});
