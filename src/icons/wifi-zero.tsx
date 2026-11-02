import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "wifi-zero",
	render: (part) => (
		<motion.path
			{...part(
				pose({ scale: [1, 0.4, 1.8, 1], opacity: [1, 1, 0.5, 1] }, { duration: 0.6, times: [0, 0.3, 0.65, 1] }),
			)}
			d="M12 20h.01"
			style={centered}
		/>
	),
});
