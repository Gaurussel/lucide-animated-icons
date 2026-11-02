import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const press = pose({ scaleY: [1, 0.86, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] });
const door = pose({ scaleX: [1, 0.3, 1] }, { duration: 0.4, times: [0, 0.5, 1] });
const light = (delay: number) => pose({ opacity: [1, 0.1, 1] }, { duration: 0.3, delay, times: [0, 0.5, 1] });

export default createAnimatedIcon({
	name: "hotel",
	render: (part) => (
		<>
			<motion.rect {...part(press)} height="20" rx="2" style={edge(0.5, 1)} width="16" x="4" y="2" />
			<motion.g {...part(door)} style={edge(0.5, 1)}>
				<path d="M10 22v-6.57" />
				<path d="M14 15.43V22" />
				<path d="M15 16a5 5 0 0 0-6 0" />
			</motion.g>
			<motion.path {...part(light(0.3))} d="M8 7h.01" />
			<motion.path {...part(light(0.37))} d="M12 7h.01" />
			<motion.path {...part(light(0.44))} d="M16 7h.01" />
			<motion.path {...part(light(0.51))} d="M8 11h.01" />
			<motion.path {...part(light(0.58))} d="M12 11h.01" />
			<motion.path {...part(light(0.65))} d="M16 11h.01" />
		</>
	),
});
