const Image = (props: Record<string, unknown>) => {
  // `objectFit` / `objectPosition` are deliberately NOT filtered out here.
  // Real next/image ignores them, so swallowing them in the double is what let
  // the focal point silently stop being applied without any test noticing.
  const { fill, placeholder, blurDataURL, ...rest } = props;
  return (
    <img
      {...rest}
      data-placeholder={placeholder as string | undefined}
      data-blur={blurDataURL as string | undefined}
    />
  );
};

export default Image;
