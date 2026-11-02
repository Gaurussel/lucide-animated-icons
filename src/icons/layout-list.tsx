import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const square = (delay: number) => pose({ scale: [1, 0.55, 1] }, { duration: 0.35, delay });
const line = (delay: number) => pose({ scaleX: [1, 0.2, 1] }, { duration: 0.4, delay });

export default createAnimatedIcon({
	name: "layout-list",
	render: (part) => (
		<>
			<motion.rect {...part(square(0))} height="7" rx="1" style={centered} width="7" x="3" y="3" />
			<motion.rect {...part(square(0.3))} height="7" rx="1" style={centered} width="7" x="3" y="14" />
			<motion.path {...part(line(0.1))} d="M14 4h7" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.18))} d="M14 9h7" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.4))} d="M14 15h7" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.48))} d="M14 20h7" style={edge(0, 0.5)} />
		</>
	),
});
