import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const drop = (delay: number) =>
	pose({ y: [0, 3.5, -3.5, 0], opacity: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.4, 0.45, 1] });

export default createAnimatedIcon({
	name: "square-dashed-bottom",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.78, 1, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
				style={edge(0.5, 0)}
			/>
			<motion.path {...part(drop(0.08))} d="M9 21h1" />
			<motion.path {...part(drop(0))} d="M14 21h1" />
		</>
	),
});
