import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.3, 0.55, 1];
const fade = (x: number) => pose({ x: [0, x, x, 0], opacity: [1, 0.15, 0.15, 1] }, { duration: 0.8, times });

export default createAnimatedIcon({
	name: "volume-off",
	render: (part) => (
		<>
			<motion.path {...part(fade(1.5))} d="M16 9a5 5 0 0 1 .95 2.293" />
			<motion.path {...part(fade(2.5))} d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 1] }))}
				d="m2 2 20 20"
			/>
			<motion.g {...part(pose({ scale: [1, 0.9, 0.9, 1] }, { duration: 0.8, times }))} style={edge(0.2, 0.5)}>
				<path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
				<path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
			</motion.g>
		</>
	),
});
