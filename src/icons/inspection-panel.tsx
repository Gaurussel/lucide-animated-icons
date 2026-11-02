import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const panel = pose({ scale: [1, 0.95, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] });
const screw = (delay: number) => pose({ scale: [1, 2, 1] }, { duration: 0.3, delay, times: [0, 0.5, 1] });

export default createAnimatedIcon({
	name: "inspection-panel",
	render: (part) => (
		<>
			<motion.rect {...part(panel)} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.path {...part(screw(0.3))} d="M7 7h.01" style={centered} />
			<motion.path {...part(screw(0.4))} d="M17 7h.01" style={centered} />
			<motion.path {...part(screw(0.5))} d="M17 17h.01" style={centered} />
			<motion.path {...part(screw(0.6))} d="M7 17h.01" style={centered} />
		</>
	),
});
