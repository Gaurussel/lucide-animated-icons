import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.1, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const note = pose({ y: [0, -2.5, 0] }, { duration: 0.6, delay: 0.25, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "list-music",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.1))} d="M12 12H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.2))} d="M12 18H3" style={edge(1, 0.5)} />
			<motion.g {...part(note)}>
				<path d="M21 15V6" />
				<path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
			</motion.g>
		</>
	),
});
