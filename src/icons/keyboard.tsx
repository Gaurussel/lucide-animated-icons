import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const press = (delay: number) => pose({ y: [0, 1.5, 0] }, { duration: 0.25, delay, times: [0, 0.5, 1] });
const space = pose({ y: [0, 1.5, 0] }, { duration: 0.25, delay: 0.6, times: [0, 0.5, 1] });
const body = pose({ scale: [1, 0.9, 1, 0.94, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.7, 1] });

export default createAnimatedIcon({
	name: "keyboard",
	render: (part) => (
		<>
			<motion.rect {...part(body)} height="16" rx="2" style={centered} width="20" x="2" y="4" />
			<motion.path {...part(press(0))} d="M6 8h.01" />
			<motion.path {...part(press(0.07))} d="M10 8h.01" />
			<motion.path {...part(press(0.14))} d="M14 8h.01" />
			<motion.path {...part(press(0.21))} d="M18 8h.01" />
			<motion.path {...part(press(0.28))} d="M8 12h.01" />
			<motion.path {...part(press(0.35))} d="M12 12h.01" />
			<motion.path {...part(press(0.42))} d="M16 12h.01" />
			<motion.path {...part(space)} d="M7 16h10" />
		</>
	),
});
