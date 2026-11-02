import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const realign = (width: number, delay: number) =>
	pose({ scaleX: [1, width, width, 1] }, { duration: 0.65, delay, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "align-justify",
	render: (part) => (
		<>
			<motion.path {...part(realign(0.25, 0))} d="M3 6h18" style={edge(0, 0.5)} />
			<motion.path {...part(realign(0.5, 0.08))} d="M3 12h18" style={edge(0, 0.5)} />
			<motion.path {...part(realign(0.35, 0.16))} d="M3 18h18" style={edge(0, 0.5)} />
		</>
	),
});
