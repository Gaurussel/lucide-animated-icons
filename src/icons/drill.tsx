import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "drill",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 0, 0.6, -0.6, 0.6, 0] },
						{ duration: 0.85, times: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1] },
					),
				)}
			>
				<path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" />
				<path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" />
				<path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
				<motion.g
					{...part(
						pose(
							{ x: [0, 0, 1, 1, 1, 1, 0] },
							{ duration: 0.85, times: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1] },
						),
					)}
				>
					<path d="M18 6h4" />
				</motion.g>
				<path d="m5 10-2 8" />
				<path d="m7 18 2-8" />
			</motion.g>
		</>
	),
});
