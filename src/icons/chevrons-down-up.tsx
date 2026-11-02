import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const move = (direction: number, delay: number) =>
	pose({ y: [0, -direction, direction * 2.5, 0] }, { duration: 0.55, delay, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "chevrons-down-up",
	render: (part) => (
		<>
			<motion.path {...part(move(1, 0))} d="m7 4 5 5 5-5" />
			<motion.path {...part(move(-1, 0.08))} d="m7 20 5-5 5 5" />
		</>
	),
});
