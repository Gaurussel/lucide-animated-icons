import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const slideOut = pose(
	{ x: [0, -1, 6, 0], y: [0, 0, -2, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const hub = pose({ scale: [1, 2.5, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "disc-album",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.g {...part(slideOut)}>
				<circle cx="12" cy="12" r="5" />
				<motion.path {...part(hub)} d="M12 12h.01" style={centered} />
			</motion.g>
		</>
	),
});
