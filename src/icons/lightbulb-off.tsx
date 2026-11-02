import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const bulb = pose({ opacity: [1, 0.4, 0.85, 0.4, 1] }, { duration: 0.85, times: [0, 0.25, 0.45, 0.65, 1] });
const cap = (delay: number) => pose({ scaleX: [1, 0.75, 1] }, { duration: 0.35, delay, times: [0, 0.5, 1] });
const slash = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.85, times: [0, 0.4, 0.55, 1] });

export default createAnimatedIcon({
	name: "lightbulb-off",
	render: (part) => (
		<>
			<motion.path {...part(bulb)} d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
			<motion.path {...part(bulb)} d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
			<motion.path {...part(slash)} d="m2 2 20 20" />
			<motion.path {...part(cap(0))} d="M9 18h6" style={centered} />
			<motion.path {...part(cap(0.1))} d="M10 22h4" style={centered} />
		</>
	),
});
