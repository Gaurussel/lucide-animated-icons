import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const clash = (direction: number, delay: number) =>
	pose(
		{ rotate: [0, -10 * direction, 14 * direction, 0] },
		{ duration: 0.66, delay, times: [0, 0.18, 0.34, 1], ease: ["easeInOut", "easeIn", ring] },
	);
const hilt = (direction: number) =>
	pose(
		{ rotate: [0, 0, 10 * direction, 0] },
		{ duration: 0.55, delay: 0.12, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "swords",
	render: (part) => (
		<>
			<motion.g {...part(clash(-1, 0))} style={pivot(18, 18)}>
				<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
				<motion.g {...part(hilt(1))} style={pivot(17, 17)}>
					<line x1="13" x2="19" y1="19" y2="13" />
					<line x1="16" x2="20" y1="16" y2="20" />
					<line x1="19" x2="21" y1="21" y2="19" />
				</motion.g>
			</motion.g>
			<motion.g {...part(clash(1, 0.06))} style={pivot(6, 18)}>
				<polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
				<motion.g {...part(hilt(-1))} style={pivot(7, 17)}>
					<line x1="5" x2="9" y1="14" y2="18" />
					<line x1="7" x2="4" y1="17" y2="20" />
					<line x1="3" x2="5" y1="19" y2="21" />
				</motion.g>
			</motion.g>
		</>
	),
});
