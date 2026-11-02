import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "satellite",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -10, 8, 0] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
			>
				<motion.path
					{...part(
						pose(
							{ x: [0, 0, -1.3, 0, 0], y: [0, 0, -1.3, 0, 0] },
							{ duration: 0.9, times: [0, 0.1, 0.3, 0.55, 1] },
						),
					)}
					d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"
				/>
				<path d="M16.5 7.5 19 5" />
				<motion.path
					{...part(
						pose(
							{ x: [0, 0, 1.3, 0, 0], y: [0, 0, 1.3, 0, 0] },
							{ duration: 0.9, times: [0, 0.1, 0.3, 0.55, 1] },
						),
					)}
					d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"
				/>
				<path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -1, 0, 0, 0, 0], opacity: [1, 1, 0.15, 1, 0.15, 1, 1] },
						{ duration: 0.9, times: [0, 0.35, 0.5, 0.65, 0.75, 0.9, 1] },
					),
				)}
				d="M9 21a6 6 0 0 0-6-6"
			/>
		</>
	),
});
