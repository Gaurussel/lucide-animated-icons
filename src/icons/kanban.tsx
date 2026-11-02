import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring } from "../helpers.ts";

const drop = (delay: number) =>
	pose(
		{ y: [0, -6, 2, 0], opacity: [1, 0, 1, 1] },
		{ duration: 0.55, delay, times: [0, 0.12, 0.42, 1], ease: ["easeInOut", "easeIn", ring] },
	);

export default createAnimatedIcon({
	name: "kanban",
	render: (part) => (
		<>
			<motion.path {...part(drop(0))} d="M6 5v11" />
			<motion.path {...part(drop(0.1))} d="M12 5v6" />
			<motion.path {...part(drop(0.2))} d="M18 5v14" />
		</>
	),
});
