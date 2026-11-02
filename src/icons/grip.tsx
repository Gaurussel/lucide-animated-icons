import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const positions = [5, 12, 19];

export default createAnimatedIcon({
	name: "grip",
	render: (part) => (
		<>
			{positions.flatMap((cy, row) =>
				positions.map((cx, column) => (
					<motion.circle
						{...part(
							pose(
								{ scale: [1, 1.7, 1] },
								{ duration: 0.45, delay: (row + column) * 0.08, ease: "easeInOut" },
							),
						)}
						cx={cx}
						cy={cy}
						key={cx * 100 + cy}
						r="1"
						style={centered}
					/>
				)),
			)}
		</>
	),
});
