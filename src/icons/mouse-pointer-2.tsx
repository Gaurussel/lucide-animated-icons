import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mouse-pointer-2",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.2, 2.5, 2.5, 0], y: [0, -1.2, 2.5, 2.5, 0], scale: [1, 1, 1, 0.9, 1] },
						{ duration: 0.75, times: [0, 0.2, 0.5, 0.65, 1] },
					),
				)}
				d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
				style={pivot(4.5, 4.5)}
			/>
		</>
	),
});
