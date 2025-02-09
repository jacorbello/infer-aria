export interface InferAriaConfig {
    /**
     * Whether to automatically fix ARIA issues
     */
    autofix?: boolean;

    /**
     * Whether to enforce strict rules
     */
    strict?: boolean;

    /**
     * Patterns to ignore
     */
    ignore?: string[];

    /**
     * Custom rule configurations
     */
    rules?: Record<string, RuleConfig>;

    /**
     * Custom element rules
     */
    customElements?: Record<string, ElementRule>;
}

export type RuleSeverity = 'error' | 'warn' | 'off';

export interface RuleConfig {
    /**
     * Rule severity level
     */
    severity: RuleSeverity;

    /**
     * Rule-specific options
     */
    options?: Record<string, unknown>;
}

export interface ElementRule {
    /**
     * Default ARIA role for the element
     * Set to false to disable role inference
     */
    role?: string | false | ((element: Element) => string);

    /**
     * Required ARIA attributes
     */
    required?: string[];

    /**
     * Optional ARIA attributes
     */
    optional?: string[];

    /**
     * Rules for child elements
     */
    children?: Record<string, ElementRule>;

    /**
     * Conditions for applying the rule
     */
    conditions?: ElementConditions;
}

export interface ElementConditions {
    /**
     * CSS selector that must match
     */
    selector?: string;

    /**
     * Required attributes and their values
     */
    attributes?: Record<string, string | RegExp>;

    /**
     * Required parent elements
     */
    parents?: string[];

    /**
     * Required child elements
     */
    children?: string[];

    /**
     * Custom condition function
     */
    custom?: (element: Element) => boolean;
}

export interface AnalysisResult {
    /**
     * Element reference
     */
    element: Element;

    /**
     * Suggested ARIA attributes
     */
    suggestions: AriaAttributeSuggestion[];

    /**
     * Rule that triggered the suggestion
     */
    rule: string;

    /**
     * Severity level
     */
    severity: RuleSeverity;

    /**
     * Explanation for the suggestion
     */
    explanation: string;
}

export interface AriaAttributeSuggestion {
    /**
     * Attribute name
     */
    attribute: string;

    /**
     * Suggested value
     */
    value: string;

    /**
     * Whether this is a required attribute
     */
    required: boolean;

    /**
     * Current value if one exists
     */
    currentValue?: string;
}

export interface Rule {
    /**
     * Rule name
     */
    name: string;

    /**
     * Rule description
     */
    description: string;

    /**
     * Default severity
     */
    defaultSeverity: RuleSeverity;

    /**
     * Rule validation function
     */
    validate: (element: Element, options?: Record<string, unknown>) => AnalysisResult[];
}