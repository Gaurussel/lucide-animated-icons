import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const body = pose({ scale: [1, 0.88, 1, 0.94, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.7, 1] });
const key = (delay: number) => pose({ scaleY: [1, 0.2, 1] }, { duration: 0.35, delay, times: [0, 0.5, 1] });
const tap = (delay: number) => pose({ scale: [1, 1.8, 1] }, { duration: 0.3, delay, times: [0, 0.5, 1] });
const bar = pose({ scaleX: [1, 0.3, 1] }, { duration: 0.35, times: [0, 0.5, 1] });

export default createAnimatedIcon({
	name: "keyboard-music",
	render: (part) => (
		<>
			<motion.rect {...part(body)} height="16" rx="2" style={centered} width="20" x="2" y="4" />
			<motion.path {...part(bar)} d="M6 8h4" style={edge(0, 0.5)} />
			<motion.path {...part(tap(0.1))} d="M14 8h.01" style={centered} />
			<motion.path {...part(tap(0.2))} d="M18 8h.01" style={centered} />
			<path d="M2 12h20" />
			<motion.path {...part(key(0.25))} d="M6 12v4" style={edge(0.5, 0)} />
			<motion.path {...part(key(0.35))} d="M10 12v4" style={edge(0.5, 0)} />
			<motion.path {...part(key(0.45))} d="M14 12v4" style={edge(0.5, 0)} />
			<motion.path {...part(key(0.55))} d="M18 12v4" style={edge(0.5, 0)} />
		</>
	),
});
