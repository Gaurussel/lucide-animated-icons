import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rocket",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{
							x: [0, -0.7, 0.7, -0.7, 0, 9, -7, 0],
							y: [0, 0.7, -0.7, 0.7, 0, -9, 7, 0],
							opacity: [1, 1, 1, 1, 1, 0, 0, 1],
						},
						{ duration: 0.9, times: [0, 0.08, 0.16, 0.24, 0.3, 0.62, 0.63, 1] },
					),
				)}
			>
				<motion.path
					{...part(
						pose(
							{ scale: [1, 1, 1.3, 1, 1.3, 1, 1] },
							{ duration: 0.9, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1] },
						),
					)}
					d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
					style={centered}
				/>
				<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
				<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
				<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
			</motion.g>
		</>
	),
});
