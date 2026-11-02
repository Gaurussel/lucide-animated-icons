import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const ripple = (delay: number) =>
	pose({ y: [0, -1.5, 0], opacity: [1, 0.15, 1] }, { duration: 0.5, delay, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "wifi-pen",
	render: (part) => (
		<>
			<motion.path {...part(ripple(0.2))} d="M2 8.82a15 15 0 0 1 20 0" />
			<motion.path
				{...part(
					pose({ rotate: [0, -10, 8, 0], x: [0, 0.8, -0.8, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }),
				)}
				d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
				style={pivot(14, 21)}
			/>
			<motion.path {...part(ripple(0.1))} d="M5 12.859a10 10 0 0 1 10.5-2.222" />
			<motion.path {...part(ripple(0))} d="M8.5 16.429a5 5 0 0 1 3-1.406" />
		</>
	),
});
