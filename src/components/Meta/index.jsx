import React from "react";

const MetaTags = ({ title, description, image }) => (
	<React.Fragment>
		<meta property='og:title' content={title} />
		<meta property='og:description' content={description} />
		<meta property='og:image' content={image} />
	</React.Fragment>
);

export default MetaTags;
