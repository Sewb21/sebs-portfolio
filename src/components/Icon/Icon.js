import React, { useContext, memo } from "react";
import PropTypes from "prop-types";
import useTheme from "hooks/useTheme";

const Icon = ({
  children,
  className,
  color,
  size,
  viewBox,
  preserveAspectRatio,
  style,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={viewBox}
      fill={theme.colors[color]}
      style={style}
      preserveAspectRatio={preserveAspectRatio}
      {...rest}
    >
      {children}
    </svg>
  );
};

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  viewBox: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  color: "blue",
  size: 24,
  viewBox: "0 0 24 24",
};

export default memo(Icon);
