const Image = (props: Record<string, unknown>) => {
  const { fill, placeholder, blurDataURL, objectFit, objectPosition, ...rest } =
    props;
  return (
    <img
      {...rest}
      data-placeholder={placeholder as string | undefined}
      data-blur={blurDataURL as string | undefined}
    />
  );
};

export default Image;
