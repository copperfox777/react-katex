import r,{memo as e}from"react";import o from"prop-types";import n from"katex";function t(e){var o,t,c=(o=["children","math","block","errorColor","renderError"],t=e,Object.keys(t).reduce(function(r,e){return o.includes(e)?r:(r[e]=t[e],r)},{})),a=e.block?"div":"span",l=e.children||e.math;try{var i=n.renderToString(l,{displayMode:!!e.block,errorColor:e.errorColor,throwOnError:!!e.renderError});return r.createElement(a,Object.assign({},c,{dangerouslySetInnerHTML:{__html:i}}))}catch(o){if(o instanceof n.ParseError||o instanceof TypeError)return e.renderError?e.renderError(o):r.createElement(a,Object.assign({},c,{dangerouslySetInnerHTML:{__html:o.message}}));throw o}}t.propTypes={children:o.string,math:o.string,block:o.bool,errorColor:o.string,renderError:o.func};export default e(t);
//# sourceMappingURL=react-katex.mjs.map
