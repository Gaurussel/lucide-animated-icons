import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const orbit = pose({ rotate: 360, scale: [1, 0.88, 1] }, { duration: 0.7, reset: true });

export default createAnimatedIcon({
	name: "loader-circle",
	render: (part) => <motion.path {...part(orbit)} d="M21 12a9 9 0 1 1-6.219-8.56" style={pivot(12, 12)} />,
});
