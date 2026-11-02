import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] });
const sun = pose({ y: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });
const stroke = (delay: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay, times: [0, 0.2, 0.4, 0.8] });

export default createAnimatedIcon({
	name: "image-plus",
	render: (part) => (
		<>
			<motion.path {...part(stroke(0))} d="M16 5h6" />
			<motion.path {...part(stroke(0.1))} d="M19 2v6" />
			<motion.g {...part(press)} style={pivot(3, 21)}>
				<path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
				<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
				<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
			</motion.g>
		</>
	),
});
