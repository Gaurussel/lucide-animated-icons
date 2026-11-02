import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const bar = (scale: number, delay: number) =>
	pose({ scaleY: [1, scale, 1] }, { duration: 0.45, delay, times: [0, 0.5, 1] });

export default createAnimatedIcon({
	name: "kanban",
	render: (part) => (
		<>
			<motion.path {...part(bar(0.15, 0))} d="M6 5v11" style={edge(0.5, 0)} />
			<motion.path {...part(bar(2.6, 0.1))} d="M12 5v6" style={edge(0.5, 0)} />
			<motion.path {...part(bar(0.2, 0.2))} d="M18 5v14" style={edge(0.5, 0)} />
		</>
	),
});
