import React from "react";
import { Helmet } from "react-helmet-async"; // dyanamic meta-tag-images

export default function Meta_Tags({
  title,
  description,
  weburl,
  thumbimg,
  type,
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />

      {/* Facebook tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbimg} />
      <meta property="og:url" content={weburl} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbimg} />
      <meta property="twitter:url" content={weburl} />
      <meta property="twitter:card" content="summary_large_image" />
      {/* End Twitter tags */}
    </Helmet>
  );
}
