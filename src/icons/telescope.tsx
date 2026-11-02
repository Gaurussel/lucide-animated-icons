import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "telescope",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -10, -10, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(12, 13)}
			>
				<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
				<path d="m13.56 11.747 4.332-.924" />
				<path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
				<path d="m6.158 8.633 1.114 4.456" />
			</motion.g>
			<path d="m16 21-3.105-6.21" />
			<path d="m8 21 3.105-6.21" />
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="12"
				cy="13"
				r="2"
				style={centered}
			/>
		</>
	),
});
