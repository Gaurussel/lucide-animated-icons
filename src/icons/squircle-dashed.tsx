import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "squircle-dashed",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1.2, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M13.77 3.043a34 34 0 0 0-3.54 0"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.2, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M13.771 20.956a33 33 0 0 1-3.541.001"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 1, 0, 0], y: [0, 1, 0, 0] }, { duration: 0.7, delay: 0.12, times: [0, 0.3, 0.6, 1] }),
				)}
				d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1, 0, 0], y: [0, -1, 0, 0] },
						{ duration: 0.7, delay: 0.12, times: [0, 0.3, 0.6, 1] },
					),
				)}
				d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438"
			/>
			<motion.path
				{...part(pose({ x: [0, 1.2, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M20.957 10.23a33 33 0 0 1 0 3.54"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.2, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M3.043 10.23a34 34 0 0 0 .001 3.541"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1, 0, 0], y: [0, 1, 0, 0] },
						{ duration: 0.7, delay: 0.12, times: [0, 0.3, 0.6, 1] },
					),
				)}
				d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1, 0, 0], y: [0, -1, 0, 0] },
						{ duration: 0.7, delay: 0.12, times: [0, 0.3, 0.6, 1] },
					),
				)}
				d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44"
			/>
		</>
	),
});
