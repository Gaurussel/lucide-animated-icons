import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const timing = { duration: 0.8, times: [0, 0.4, 0.6, 1] };
const back = pose({ x: [0, -1.5, -1.5, 0], y: [0, 1.5, 1.5, 0] }, timing);
const front = pose({ x: [0, 1, 1, 0], y: [0, -1, -1, 0] }, timing);
const sun = pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] });

export default createAnimatedIcon({
	name: "images",
	render: (part) => (
		<>
			<motion.path {...part(back)} d="M18 22H4a2 2 0 0 1-2-2V6" />
			<motion.g {...part(front)}>
				<path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
				<motion.circle {...part(sun)} cx="12" cy="8" r="2" style={centered} />
				<rect height="16" rx="2" width="16" x="6" y="2" />
			</motion.g>
		</>
	),
});
