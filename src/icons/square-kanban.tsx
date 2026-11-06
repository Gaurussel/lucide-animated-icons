import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, springy } from "../helpers.ts";

const drop = (delay: number) =>
	pose(
		{ y: [0, -3, 0], opacity: [1, 0, 1] },
		{ duration: 0.55, delay, times: [0, 0.2, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "square-kanban",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.5, 0.72))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.path {...part(drop(0))} d="M8 7v7" />
			<motion.path {...part(drop(0.08))} d="M12 7v4" />
			<motion.path {...part(drop(0.16))} d="M16 7v9" />
		</>
	),
});
