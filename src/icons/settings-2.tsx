import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.4, 0.6, 1];

export default createAnimatedIcon({
	name: "settings-2",
	render: (part) => (
		<>
			<path d="M14 17H5" />
			<path d="M19 7h-9" />
			<motion.circle {...part(pose({ x: [0, -4, -4, 0] }, { duration: 0.8, times }))} cx="17" cy="17" r="3" />
			<motion.circle
				{...part(pose({ x: [0, 4, 4, 0] }, { duration: 0.8, delay: 0.15, times }))}
				cx="7"
				cy="7"
				r="3"
			/>
		</>
	),
});
