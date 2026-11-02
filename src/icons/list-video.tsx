import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.1, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const play = pose(
	{ x: [0, -2, 2, 0], scale: [1, 0.6, 1.2, 1] },
	{ duration: 0.6, delay: 0.2, times: [0, 0.3, 0.7, 1] },
);

export default createAnimatedIcon({
	name: "list-video",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.1))} d="M12 12H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.2))} d="M12 18H3" style={edge(1, 0.5)} />
			<motion.path {...part(play)} d="m16 12 5 3-5 3v-6Z" style={centered} />
		</>
	),
});
