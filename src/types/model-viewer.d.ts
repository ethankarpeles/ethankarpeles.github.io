import type * as React from 'react';

declare global {
    namespace React.JSX {
        interface IntrinsicElements {
            'model-viewer': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            > & {
                src?: string;
                alt?: string;
                ar?: boolean;
                'ar-modes'?: string;
                'camera-controls'?: boolean;
                'camera-orbit'?: string;
                'auto-rotate'?: boolean;
                poster?: string;
                exposure?: number | string;
                'shadow-intensity'?: number | string;
            };
        }
    }
}

export { };
