import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const speaker = pose({ scale: [1, 1.12, 1, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] });
const emit = (delay: number) =>
	pose({ x: [0, 2.5, -2, 0], opacity: [1, 0, 0, 1] }, { duration: 0.6, delay, times: [0, 0.45, 0.46, 1] });

export default createAnimatedIcon({
	name: "volume-2",
	render: (part) => (
		<>
			<motion.path
				{...part(speaker)}
				d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
				style={edge(0.2, 0.5)}
			/>
			<motion.path {...part(emit(0.15))} d="M16 9a5 5 0 0 1 0 6" />
			<motion.path {...part(emit(0.3))} d="M19.364 18.364a9 9 0 0 0 0-12.728" />
		</>
	),
});
