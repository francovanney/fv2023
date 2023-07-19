import { useMediaQuery } from "react-responsive";

export const MediaQueries = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
	const isXXL = useMediaQuery({ query: "(min-width: 1200px)" });

	return {
		isTabletOrMobile,
		isXXL
	};
};
