import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cable-car",
	render: (part) => (
		<>
			<path d="M10 3h.01" />
			<path d="M14 2h.01" />
			<path d="m2 9 20-5" />
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 3, 0], y: [0, 0.4, -0.75, 0], rotate: [0, 3, -3, 0] },
						{ duration: 0.85, times: [0, 0.25, 0.7, 1] },
					),
				)}
				style={pivot(12, 6.5)}
			>
				<path d="M12 12V6.5" />
				<rect height="10" rx="3" width="16" x="4" y="12" />
				<path d="M9 12v5" />
				<path d="M15 12v5" />
				<path d="M4 17h16" />
			</motion.g>
		</>
	),
});
