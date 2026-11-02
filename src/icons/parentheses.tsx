import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber } from "../helpers.ts";

const clap = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: ["easeIn", rubber] });

export default createAnimatedIcon({
	name: "parentheses",
	render: (part) => (
		<>
			<motion.path {...part(clap(1))} d="M8 21s-4-3-4-9 4-9 4-9" />
			<motion.path {...part(clap(-1))} d="M16 3s4 3 4 9-4 9-4 9" />
		</>
	),
});
