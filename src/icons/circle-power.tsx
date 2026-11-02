import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const button = pose({ y: [0, 3, 0] }, { duration: 0.6, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-power",
	render: (part) => (
		<>
			<motion.path {...part(button)} d="M12 7v4" />
			<motion.path {...part(redraw(0.1, 0.5))} d="M7.998 9.003a5 5 0 1 0 8-.005" />
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
		</>
	),
});
