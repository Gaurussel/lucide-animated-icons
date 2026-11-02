import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const roof = pose({ y: [0, 2, 0] }, { duration: 0.7, times: [0, 0.45, 1] });
const column = (delay: number) => pose({ scaleY: [1, 0.7, 1] }, { duration: 0.7, delay, times: [0, 0.45, 1] });
const base = pose({ scaleX: [1, 0.92, 1] }, { duration: 0.7, times: [0, 0.45, 1] });

export default createAnimatedIcon({
	name: "landmark",
	render: (part) => (
		<>
			<motion.path
				{...part(roof)}
				d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"
			/>
			<motion.path {...part(column(0))} d="M6 18v-7" style={edge(0.5, 1)} />
			<motion.path {...part(column(0.05))} d="M10 18v-7" style={edge(0.5, 1)} />
			<motion.path {...part(column(0.1))} d="M14 18v-7" style={edge(0.5, 1)} />
			<motion.path {...part(column(0.15))} d="M18 18v-7" style={edge(0.5, 1)} />
			<motion.path {...part(base)} d="M3 22h18" style={centered} />
		</>
	),
});
