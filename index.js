import React, { memo } from 'react';
import PropTypes from 'prop-types';
import KaTeX from 'katex';

function TeX(props) {
  const otherProps = omit(
    [
      'children',
      'math',
      'block',
      'errorColor',
      'renderError',
      'settings',
      'as',
      'style'
    ],
    props
  );
  const Component = props.as || (props.block ? 'div' : 'span');
  const displayStyle = props.as
    ? { display: props.block ? 'block' : 'inline' }
    : null;
  const style = Object.assign({}, displayStyle, props.style);
  const content = props.children || props.math;

  try {
    const html = KaTeX.renderToString(
      content,
      Object.assign(
        {},
        {
          displayMode: !!props.block,
          errorColor: props.errorColor,
          throwOnError: !!props.renderError
        },
        // you can rewrite all KaTeX options directly
        props.settings
      )
    );

    return (
      <Component
        {...otherProps}
        style={style}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (error) {
    if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
      return props.renderError ? (
        props.renderError(error)
      ) : (
        <Component
          {...otherProps}
          style={style}
          dangerouslySetInnerHTML={{ __html: error.message }}
        />
      );
    }

    throw error;
  }
}

TeX.propTypes = {
  children: PropTypes.string,
  math: PropTypes.string,
  block: PropTypes.bool,
  errorColor: PropTypes.string,
  renderError: PropTypes.func,
  settings: PropTypes.object,
  as: PropTypes.elementType,
  style: PropTypes.object
};

export default memo(TeX);

function omit(keys, obj) {
  return Object.keys(obj).reduce(
    (acc, key) => (keys.includes(key) ? acc : ((acc[key] = obj[key]), acc)),
    {}
  );
}
