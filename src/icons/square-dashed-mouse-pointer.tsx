import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-dashed-mouse-pointer",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, 1, -1.5, 0], y: [0, 1, -1.5, 0], scale: [1, 1, 0.85, 1] },
						{ duration: 0.75, times: [0, 0.25, 0.6, 1] },
					),
				)}
				style={centered}
			>
				<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M5 3a2 2 0 0 0-2 2" />
				<path d="M19 3a2 2 0 0 1 2 2" />
				<path d="M5 21a2 2 0 0 1-2-2" />
				<path d="M9 3h1" />
				<path d="M9 21h2" />
				<path d="M14 3h1" />
				<path d="M3 9v1" />
				<path d="M21 9v2" />
				<path d="M3 14v1" />
			</motion.g>
		</>
	),
});
