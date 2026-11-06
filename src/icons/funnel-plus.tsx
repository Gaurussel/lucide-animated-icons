import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, rubber, snap } from "../helpers.ts";

const sift = pose(
	{ y: [0, -2.4, 0], rotate: [0, 8.4, 0] },
	{ duration: 0.75, times: [0, 0.22, 1], ease: [snap, ring] },
);
const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "funnel-plus",
	render: (part) => (
		<>
			<motion.path
				{...part(sift)}
				d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"
				style={pivot(12, 22)}
			/>
			<motion.g {...part(nod)} style={pivot(19, 6)}>
				<path d="M16 6h6" />
				<path d="M19 3v6" />
			</motion.g>
		</>
	),
});
