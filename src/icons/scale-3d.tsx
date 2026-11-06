import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const grow = pose({ x: [0, 1.2, 0], y: [0, 1.2, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const pin = pose({ scale: [1, 0.64, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "scale-3d",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.05, 0.55))} d="M5 7v11a1 1 0 0 0 1 1h11" />
			<motion.path {...part(redraw(0.15, 0.45))} d="M5.293 18.707 11 13" />
			<motion.circle {...part(grow)} cx="19" cy="19" r="2" />
			<motion.circle {...part(pin)} cx="5" cy="5" r="2" style={centered} />
		</>
	),
});
