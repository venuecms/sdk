const Image = (props: Record<string, unknown>) => {
  const { fill, placeholder, blurDataURL, objectFit, objectPosition, ...rest } =
    props;
  return <img {...rest} />;
};

export default Image;
