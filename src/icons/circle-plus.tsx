import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const nod = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.85, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "circle-plus",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.g {...part(nod)} style={centered}>
				<path d="M8 12h8" />
				<path d="M12 8v8" />
			</motion.g>
		</>
	),
});
