import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const floor = (index: number) =>
	pose({ scaleX: [1, 0, 0, 1] }, { duration: 0.5, delay: index * 0.07, times: [0, 0.3, 0.4, 1] });
const wing = (delay: number) => pose({ scaleY: [1, 0.7, 0.7, 1] }, { duration: 0.55, delay, times: [0, 0.35, 0.5, 1] });

export default createAnimatedIcon({
	name: "building-2",
	render: (part) => (
		<>
			<motion.path {...part(wing(0))} d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" style={edge(0.5, 1)} />
			<motion.path {...part(wing(0.12))} d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" style={edge(0.5, 1)} />
			<motion.path {...part(wing(0.22))} d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" style={edge(0.5, 1)} />
			<motion.path {...part(floor(3))} d="M10 6h4" style={edge(0, 0.5)} />
			<motion.path {...part(floor(2))} d="M10 10h4" style={edge(0, 0.5)} />
			<motion.path {...part(floor(1))} d="M10 14h4" style={edge(0, 0.5)} />
			<motion.path {...part(floor(0))} d="M10 18h4" style={edge(0, 0.5)} />
		</>
	),
});
