import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const sway = pose({ rotate: [0, 5, -4, 0] }, { duration: 0.85, times: [0, 0.35, 0.7, 1] });
const ripple = (delay: number) => pose({ y: [0, 0, 1.2, 0] }, { duration: 0.85, delay, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "grape",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(22, 2)}>
			<path d="M22 5V2l-5.89 5.89" />
			<motion.circle {...part(ripple(0.3))} cx="16.6" cy="15.89" r="3" />
			<motion.circle {...part(ripple(0))} cx="8.11" cy="7.4" r="3" />
			<motion.circle {...part(ripple(0.15))} cx="12.35" cy="11.65" r="3" />
			<motion.circle {...part(ripple(0.05))} cx="13.91" cy="5.85" r="3" />
			<motion.circle {...part(ripple(0.2))} cx="18.15" cy="10.09" r="3" />
			<motion.circle {...part(ripple(0.2))} cx="6.56" cy="13.2" r="3" />
			<motion.circle {...part(ripple(0.35))} cx="10.8" cy="17.44" r="3" />
			<motion.circle {...part(ripple(0.4))} cx="5" cy="19" r="3" />
		</motion.g>
	),
});
