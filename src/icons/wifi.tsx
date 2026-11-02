import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const wave = (delay: number) => pose({ opacity: [1, 0.12, 1] }, { duration: 0.45, delay, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "wifi",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 1.8, 1] }, { duration: 0.35, times: [0, 0.4, 1] }))}
				d="M12 20h.01"
				style={centered}
			/>
			<motion.path {...part(wave(0.12))} d="M8.5 16.429a5 5 0 0 1 7 0" />
			<motion.path {...part(wave(0.24))} d="M5 12.859a10 10 0 0 1 14 0" />
			<motion.path {...part(wave(0.36))} d="M2 8.82a15 15 0 0 1 20 0" />
		</>
	),
});
