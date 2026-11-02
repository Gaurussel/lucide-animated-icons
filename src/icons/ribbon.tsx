import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const sway = pose(
	{ rotate: [0, 6, -18, 0] },
	{ duration: 0.75, times: [0, 0.1, 0.22, 1], ease: ["easeInOut", snap, ring] },
);
const knot = pose(
	{ rotate: [0, 0, 16, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "ribbon",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(12, 2)}>
			<motion.g {...part(knot)} style={pivot(12, 8)}>
				<path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" />
				<path d="M6.243 9.016a7 7 0 0 1 11.507-.009" />
			</motion.g>
			<path d="m12 18 2.57-3.5" />
			<path d="M9.35 14.53 12 11.22" />
			<path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" />
		</motion.g>
	),
});
