import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const gust = pose(
	{ rotate: [0, 4, -16, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const trunk = pose(
	{ rotate: [0, 0, -8, 0] },
	{ duration: 0.65, delay: 0.08, times: [0, 0.2, 0.35, 1], ease: ["easeInOut", snap, ring] },
);
const twig = pose(
	{ rotate: [0, 0, 30, 0] },
	{ duration: 0.6, delay: 0.14, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "shrub",
	render: (part) => (
		<>
			<motion.path
				{...part(gust)}
				d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"
				style={pivot(12, 20)}
			/>
			<motion.path {...part(trunk)} d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" style={pivot(12, 22)} />
			<motion.path {...part(twig)} d="M14.5 14.5 12 17" style={pivot(12, 17)} />
		</>
	),
});
