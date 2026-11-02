import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const bar = (delay: number) => pose({ scaleX: [1, 0.05, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const stem = pose({ pathLength: [1, 0, 1] }, { duration: 0.5, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "japanese-yen",
	render: (part) => (
		<>
			<motion.path {...part(stem)} d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
			<motion.path {...part(bar(0.35))} d="M6 11h12" style={centered} />
			<motion.path {...part(bar(0.45))} d="M6 15h12" style={centered} />
		</>
	),
});
