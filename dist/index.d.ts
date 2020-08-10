import React, { ComponentPropsWithoutRef, ReactElement, ElementType } from 'react';
import { ParseError, KatexOptions } from 'katex';
declare const TeX: React.FC<TeXProps>;
export default TeX;
declare type TeXProps = ComponentPropsWithoutRef<'div'> & Partial<{
    as: ElementType;
    math: string | number;
    block: boolean;
    errorColor: string;
    renderError: (error: ParseError | TypeError) => ReactElement;
    settings: KatexOptions;
}>;
