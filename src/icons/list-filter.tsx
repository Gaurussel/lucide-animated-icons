import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const bar = (delay: number) => pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, delay });

export default createAnimatedIcon({
	name: "list-filter",
	render: (part) => (
		<>
			<motion.path {...part(bar(0))} d="M3 6h18" style={centered} />
			<motion.path {...part(bar(0.12))} d="M7 12h10" style={centered} />
			<motion.path {...part(bar(0.24))} d="M10 18h4" style={centered} />
		</>
	),
});
