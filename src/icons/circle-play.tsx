import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const play = pose({ x: [0, 3, 0], scale: [1, 1.3, 1] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-play",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.polygon {...part(play)} points="10 8 16 12 10 16 10 8" style={edge(0, 0.5)} />
		</>
	),
});
