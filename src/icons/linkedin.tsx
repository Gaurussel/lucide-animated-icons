import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const hopIn = (delay: number) =>
	pose({ y: [0, -5, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const nod = pose({ rotate: [0, -12, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "linkedin",
	render: (part) => (
		<>
			<motion.circle {...part(hopIn(0))} cx="4" cy="4" r="2" />
			<motion.rect {...part(hopIn(0.08))} height="12" width="4" x="2" y="9" />
			<motion.path
				{...part(nod)}
				d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
