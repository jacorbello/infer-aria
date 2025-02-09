import { ElementRule } from '../types';

export const DEFAULT_RULES: Record<string, ElementRule> = {
    button: {
        role: 'button',
        required: ['aria-label'],
        optional: [
            'aria-expanded',
            'aria-pressed',
            'aria-disabled',
            'aria-haspopup',
            'aria-controls',
            'aria-describedby'
        ],
        conditions: {
            attributes: {
                type: /^(?!submit|reset).*$/
            }
        }
    },
    input: {
        role: (element: Element) => {
            const inputType = (element as HTMLInputElement).type;
            switch (inputType) {
                case 'checkbox': return 'checkbox';
                case 'radio': return 'radio';
                case 'range': return 'slider';
                case 'search': return 'searchbox';
                case 'number': return 'spinbutton';
                default: return 'textbox';
            }
        },
        required: ['aria-label'],
        optional: [
            'aria-required',
            'aria-invalid',
            'aria-describedby',
            'aria-errormessage',
            'aria-placeholder',
            'aria-readonly',
            'aria-disabled',
            'aria-valuemin',
            'aria-valuemax',
            'aria-valuenow',
            'aria-valuetext'
        ],
        conditions: {
            attributes: {
                type: /^(?!hidden|submit|reset|button).*$/
            }
        }
    },
    select: {
        role: 'combobox',
        required: ['aria-label'],
        optional: [
            'aria-required',
            'aria-invalid',
            'aria-expanded',
            'aria-controls',
            'aria-activedescendant',
            'aria-describedby',
            'aria-disabled'
        ]
    },
    textarea: {
        role: 'textbox',
        required: ['aria-label'],
        optional: [
            'aria-required',
            'aria-invalid',
            'aria-describedby',
            'aria-errormessage',
            'aria-placeholder',
            'aria-readonly',
            'aria-disabled'
        ]
    },
    form: {
        role: 'form',
        optional: ['aria-label', 'aria-describedby']
    },
    fieldset: {
        role: 'group',
        required: ['aria-label'],
        optional: ['aria-describedby']
    },
    nav: {
        role: 'navigation',
        required: ['aria-label']
    },
    main: {
        role: 'main',
        optional: ['aria-label']
    },
    aside: {
        role: 'complementary',
        required: ['aria-label']
    },
    header: {
        role: 'banner',
        optional: ['aria-label'],
        conditions: {
            parents: ['body']
        }
    },
    footer: {
        role: 'contentinfo',
        optional: ['aria-label'],
        conditions: {
            parents: ['body']
        }
    },
    article: {
        role: 'article',
        optional: ['aria-label', 'aria-labelledby', 'aria-posinset', 'aria-setsize']
    },
    section: {
        role: 'region',
        required: ['aria-label'],
        conditions: {
            custom: (element) => element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby')
        }
    },
    table: {
        role: 'table',
        optional: [
            'aria-label',
            'aria-describedby',
            'aria-rowcount',
            'aria-colcount'
        ]
    },
    th: {
        role: 'columnheader',
        optional: [
            'aria-sort',
            'aria-colindex',
            'aria-colspan',
            'aria-expanded'
        ]
    },
    td: {
        role: 'cell',
        optional: [
            'aria-colindex',
            'aria-colspan',
            'aria-rowspan'
        ]
    },
    ul: {
        role: 'list',
        optional: ['aria-label']
    },
    ol: {
        role: 'list',
        optional: ['aria-label']
    },
    li: {
        role: 'listitem',
        optional: [
            'aria-level',
            'aria-posinset',
            'aria-setsize'
        ]
    },
    dialog: {
        role: 'dialog',
        required: ['aria-label', 'aria-modal'],
        optional: ['aria-describedby']
    },
    img: {
        role: 'img',
        required: ['aria-label'],
        conditions: {
            custom: (element) => !(element as HTMLImageElement).alt
        }
    },
    figure: {
        role: 'figure',
        optional: ['aria-label', 'aria-describedby']
    },
    tablist: {
        role: 'tablist',
        required: ['aria-label'],
        optional: ['aria-orientation']
    },
    tab: {
        role: 'tab',
        required: [
            'aria-selected',
            'aria-controls'
        ],
        optional: [
            'aria-disabled',
            'aria-expanded'
        ]
    },
    tabpanel: {
        role: 'tabpanel',
        required: ['aria-label'],
        optional: ['aria-expanded']
    },
    accordion: {
        role: 'region',
        required: ['aria-label']
    },
    menu: {
        role: 'menu',
        required: ['aria-label'],
        optional: ['aria-orientation']
    },
    menuitem: {
        role: 'menuitem',
        required: ['aria-label'],
        optional: [
            'aria-disabled',
            'aria-checked',
            'aria-haspopup'
        ]
    },
    tree: {
        role: 'tree',
        required: ['aria-label'],
        optional: [
            'aria-multiselectable',
            'aria-orientation'
        ]
    },
    treeitem: {
        role: 'treeitem',
        required: ['aria-label'],
        optional: [
            'aria-expanded',
            'aria-level',
            'aria-posinset',
            'aria-setsize',
            'aria-selected'
        ]
    },
    progress: {
        role: 'progressbar',
        required: [
            'aria-valuenow',
            'aria-valuemin',
            'aria-valuemax'
        ],
        optional: [
            'aria-label',
            'aria-valuetext'
        ]
    },
    slider: {
        role: 'slider',
        required: [
            'aria-label',
            'aria-valuenow',
            'aria-valuemin',
            'aria-valuemax'
        ],
        optional: [
            'aria-valuetext',
            'aria-orientation'
        ]
    },
    toolbar: {
        role: 'toolbar',
        required: ['aria-label'],
        optional: ['aria-orientation']
    },
    search: {
        role: 'search',
        optional: ['aria-label']
    },
    feed: {
        role: 'feed',
        required: ['aria-label'],
        optional: ['aria-busy']
    },
    grid: {
        role: 'grid',
        required: ['aria-label'],
        optional: [
            'aria-rowcount',
            'aria-colcount',
            'aria-readonly',
            'aria-multiselectable'
        ]
    },
    gridcell: {
        role: 'gridcell',
        optional: [
            'aria-selected',
            'aria-readonly',
            'aria-required',
            'aria-expanded'
        ]
    },
    alert: {
        role: 'alert',
        optional: ['aria-live', 'aria-atomic']
    },
    alertdialog: {
        role: 'alertdialog',
        required: ['aria-label', 'aria-describedby']
    },
    timer: {
        role: 'timer',
        required: ['aria-label'],
        optional: ['aria-live']
    },
    status: {
        role: 'status',
        optional: ['aria-live', 'aria-atomic']
    },
    log: {
        role: 'log',
        required: ['aria-label'],
        optional: ['aria-live']
    }
};

/**
 * Helper function to determine if an element matches conditions
 * @param element - The element to check
 * @param rule - The rule to match against
 * @returns True if the element matches the conditions, false otherwise
 */
export function matchesConditions(element: Element, rule: ElementRule): boolean {
    if (!rule.conditions) return true;

    const { selector, attributes, parents, children, custom } = rule.conditions;

    if (selector && !element.matches(selector)) return false;

    if (attributes) {
        for (const [attr, value] of Object.entries(attributes)) {
            const elementValue = element.getAttribute(attr);
            if (!elementValue) return false;
            if (value instanceof RegExp && !value.test(elementValue)) return false;
            if (typeof value === 'string' && value !== elementValue) return false;
        }
    }

    if (parents) {
        const parent = element.parentElement;
        if (!parent || !parents.some(selector => parent.matches(selector))) return false;
    }

    if (children) {
        const hasRequiredChildren = children.every(selector =>
            element.querySelector(selector)
        );
        if (!hasRequiredChildren) return false;
    }

    if (custom && !custom(element)) return false;

    return true;
}