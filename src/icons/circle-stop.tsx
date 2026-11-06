import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.93, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const stop = pose(
	{ rotate: [0, 0, 0], scale: [1, 0.7, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "circle-stop",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.rect {...part(stop)} height="6" rx="1" style={centered} width="6" x="9" y="9" />
		</>
	),
});
