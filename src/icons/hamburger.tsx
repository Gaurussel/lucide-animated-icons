import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.2, 0.45, 0.7, 1] };
const layer = (lift: number, delay: number) => pose({ y: [0, 0.5, lift, lift, 0] }, { ...phase, delay });

export default createAnimatedIcon({
	name: "hamburger",
	render: (part) => (
		<>
			<motion.path {...part(layer(-1.5, 0.05))} d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" />
			<motion.path {...part(layer(-3, 0))} d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" />
			<path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" />
			<motion.path {...part(layer(-1.5, 0.05))} d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
		</>
	),
});
