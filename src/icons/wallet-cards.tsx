import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const card = pose(
	{ y: [0, 1, -5, 0], rotate: [0, 0, -10, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const flap = pose({ y: [0, 0, 3, 0] }, { duration: 0.72, times: [0, 0.2, 0.34, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "wallet-cards",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(card)} d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" style={pivot(3, 9)} />
			<motion.path
				{...part(flap)}
				d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
			/>
		</>
	),
});
