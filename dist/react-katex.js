function r(r){return r&&"object"==typeof r&&"default"in r?r.default:r}var e=require("react"),o=r(e),n=r(require("prop-types")),t=r(require("katex"));function a(r){var e,n,a=(e=["children","math","block","errorColor","renderError"],n=r,Object.keys(n).reduce(function(r,o){return e.includes(o)?r:(r[o]=n[o],r)},{})),c=r.block?"div":"span",l=r.children||r.math;try{var i=t.renderToString(l,{displayMode:!!r.block,errorColor:r.errorColor,throwOnError:!!r.renderError});return o.createElement(c,Object.assign({},a,{dangerouslySetInnerHTML:{__html:i}}))}catch(e){if(e instanceof t.ParseError||e instanceof TypeError)return r.renderError?r.renderError(e):o.createElement(c,Object.assign({},a,{dangerouslySetInnerHTML:{__html:e.message}}));throw e}}a.propTypes={children:n.string,math:n.string,block:n.bool,errorColor:n.string,renderError:n.func};var c=e.memo(a);module.exports=c;
//# sourceMappingURL=react-katex.js.map
