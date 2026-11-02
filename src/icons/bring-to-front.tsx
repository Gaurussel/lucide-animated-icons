import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap, springy } from "../helpers.ts";

const lift = pose(
	{ scale: [1, 0.7, 1.3, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const away = (direction: number) =>
	pose(
		{ x: [0, 2.5 * direction, 0], y: [0, 2.5 * direction, 0] },
		{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] },
	);

export default createAnimatedIcon({
	name: "bring-to-front",
	render: (part) => (
		<>
			<motion.rect {...part(lift)} height="8" rx="2" style={centered} width="8" x="8" y="8" />
			<motion.path {...part(away(-1))} d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
			<motion.path {...part(away(1))} d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
		</>
	),
});
