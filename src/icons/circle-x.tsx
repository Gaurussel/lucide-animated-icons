import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] });
const stroke = (delay: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.55, delay, times: [0, 0.3, 0.4, 1] });

export default createAnimatedIcon({
	name: "circle-x",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.g
				{...part(pose({ scale: [1, 0.6, 0.6, 1] }, { duration: 0.7, times: [0, 0.25, 0.55, 1] }))}
				style={centered}
			>
				<motion.path {...part(stroke(0))} d="m15 9-6 6" />
				<motion.path {...part(stroke(0.15))} d="m9 9 6 6" />
			</motion.g>
		</>
	),
});
