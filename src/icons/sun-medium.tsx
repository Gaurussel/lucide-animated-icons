import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sun-medium",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1.18, 1] }, { duration: 0.85, times: [0, 0.55, 1] }))}
				cx="12"
				cy="12"
				r="4"
				style={centered}
			/>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -10, 360], scale: [1, 0.85, 1] },
						{ duration: 0.85, times: [0, 0.2, 1], reset: true },
					),
				)}
				style={centered}
			>
				<path d="M12 3v1" />
				<path d="M12 20v1" />
				<path d="M3 12h1" />
				<path d="M20 12h1" />
				<path d="m18.364 5.636-.707.707" />
				<path d="m6.343 17.657-.707.707" />
				<path d="m5.636 5.636.707.707" />
				<path d="m17.657 17.657.707.707" />
			</motion.g>
		</>
	),
});
