import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const slide = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "circle-equal",
	render: (part) => (
		<>
			<motion.path {...part(slide(-3))} d="M7 10h10" />
			<motion.path {...part(slide(3))} d="M7 14h10" />
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
		</>
	),
});
