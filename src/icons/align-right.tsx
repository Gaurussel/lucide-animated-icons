import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const realign = (width: number, delay: number) =>
	pose({ scaleX: [1, width, width, 1] }, { duration: 0.55, delay, times: [0, 0.35, 0.5, 1] });

export default createAnimatedIcon({
	name: "align-right",
	render: (part) => (
		<>
			<motion.path {...part(realign(0.35, 0))} d="M21 6H3" style={edge(1, 0.5)} />
			<motion.path {...part(realign(0.5, 0.08))} d="M21 12H9" style={edge(1, 0.5)} />
			<motion.path {...part(realign(0.4, 0.16))} d="M21 18H7" style={edge(1, 0.5)} />
		</>
	),
});
