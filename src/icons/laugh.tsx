import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const bounce = pose({ y: [0, -1, 0, -1, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] });
const mouth = pose({ scaleY: [1, 0.75, 1, 0.75, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] });
const eye = pose({ y: [0, 0.8, 0, 0.8, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] });

export default createAnimatedIcon({
	name: "laugh",
	render: (part) => (
		<motion.g {...part(bounce)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(mouth)} d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" style={edge(0.5, 0)} />
			<motion.line {...part(eye)} x1="9" x2="9.01" y1="9" y2="9" />
			<motion.line {...part(eye)} x1="15" x2="15.01" y1="9" y2="9" />
		</motion.g>
	),
});
