import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const shackle = pose({ y: [0, -1.8, 0] }, { duration: 0.65, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "message-square-lock",
	render: (part) => (
		<>
			<motion.path {...part(talk)} d="M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5" style={pivot(3, 21)} />
			<motion.path {...part(shackle)} d="M19 15v-2a2 2 0 1 0-4 0v2" />
			<motion.rect {...part(jelly(0.25, 0.7))} height="5" rx="1" style={edge(0.5, 1)} width="8" x="13" y="15" />
		</>
	),
});
