import type { AnalysisResult, InferAriaConfig } from './types';

export * from './types';
export * from './constants';

export class AriaAnalyzer {
    private config: InferAriaConfig;

    constructor(config: InferAriaConfig = {}) {
        this.config = {
            autofix: false,
            strict: false,
            ignore: [],
            ...config
        };
    }

    /**
     * Analyze an element and its children for ARIA issues
     */
    analyze(element: Element): AnalysisResult[] {
        // Implementation to come
        return [];
    }

    /**
     * Fix ARIA issues on an element and its children
     */
    fix(element: Element): void {
        // Implementation to come
    }
}