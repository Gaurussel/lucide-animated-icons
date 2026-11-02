import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const ripple = (delay: number) =>
	pose({ y: [0, -1.5, 0], opacity: [1, 0.15, 1] }, { duration: 0.5, delay, times: [0, 0.4, 1] });
const dot = pose({ scale: [1, 1.8, 1] }, { duration: 0.35, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "wifi-low",
	render: (part) => (
		<>
			<motion.path {...part(dot)} d="M12 20h.01" style={centered} />
			<motion.path {...part(ripple(0.08))} d="M8.5 16.429a5 5 0 0 1 7 0" />
		</>
	),
});
