import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const realign = (width: number, delay: number) =>
	pose({ scaleX: [1, width, width, 1] }, { duration: 0.55, delay, times: [0, 0.35, 0.5, 1] });

export default createAnimatedIcon({
	name: "align-left",
	render: (part) => (
		<>
			<motion.path {...part(realign(0.35, 0))} d="M21 6H3" style={edge(0, 0.5)} />
			<motion.path {...part(realign(0.5, 0.08))} d="M15 12H3" style={edge(0, 0.5)} />
			<motion.path {...part(realign(0.4, 0.16))} d="M17 18H3" style={edge(0, 0.5)} />
		</>
	),
});
