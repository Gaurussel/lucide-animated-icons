import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const roof = pose({ y: [0, -2.4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const bell = pose({ scale: [1, 1.3, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "school",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.2, 0.45))} d="M14 22v-4a2 2 0 1 0-4 0v4" />
			<motion.g {...part(jelly(0.35, 0.7))} style={edge(0.5, 1)}>
				<path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10" />
				<path d="M18 5v17" />
				<path d="M6 5v17" />
			</motion.g>
			<motion.path {...part(roof)} d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6" />
			<motion.circle {...part(bell)} cx="12" cy="9" r="2" style={centered} />
		</>
	),
});
