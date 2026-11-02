import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] });
const dot = pose({ scale: [1, 0.3, 1] }, { duration: 0.35, delay: 0.1, times: [0, 0.5, 1] });
const arc = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.4, delay, times: [0, 0.35, 1] });

export default createAnimatedIcon({
	name: "house-wifi",
	render: (part) => (
		<>
			<motion.g {...part(press)} style={edge(0.5, 1)}>
				<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			</motion.g>
			<motion.path {...part(dot)} d="M12 17h.01" style={centered} />
			<motion.path {...part(arc(0.25))} d="M9.5 13.866a4 4 0 0 1 5 .01" />
			<motion.path {...part(arc(0.4))} d="M7 10.754a8 8 0 0 1 10 0" />
		</>
	),
});
