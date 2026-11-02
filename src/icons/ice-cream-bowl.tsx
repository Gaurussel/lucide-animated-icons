import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const bowl = pose({ scaleY: [1, 0.78, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] });
const scoop = (y: number, delay: number) => pose({ y: [0, y, 0] }, { duration: 0.45, delay, times: [0, 0.45, 1] });

export default createAnimatedIcon({
	name: "ice-cream-bowl",
	render: (part) => (
		<>
			<motion.path
				{...part(bowl)}
				d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(scoop(-2.5, 0.2))} d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
			<motion.path {...part(scoop(-2, 0.3))} d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
		</>
	),
});
