function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// eslint-disable-next-line func-names
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

function getJSON(obj) {
  return JSON.stringify(obj);
}

function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  Object.setPrototypeOf(obj, proto);
  return obj;
}

const TWICE_ERROR = 'Element, id and pseudo-element should not occur more then one time inside the selector';
const NOT_SO_ERROR = 'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element';

const cssSelectorBuilder = {
  element(value) {
    if (this.res && this.res.filter((val) => val.type === 'element').length !== 0) {
      throw new Error(TWICE_ERROR);
    }

    const res = { ...this, res: [...this.res || [], { type: 'element', value }] };
    res.throwErrorIfNotSorted();

    return res;
  },

  id(value) {
    if (this.res && this.res.filter((val) => val.type === 'id').length !== 0) {
      throw new Error(TWICE_ERROR);
    }

    const res = { ...this, res: [...this.res || [], { type: 'id', value }] };
    res.throwErrorIfNotSorted();

    return res;
  },

  class(value) {
    const res = { ...this, res: [...this.res || [], { type: 'class', value }] };
    res.throwErrorIfNotSorted();

    return res;
  },

  attr(value) {
    const res = { ...this, res: [...this.res || [], { type: 'attribute', value }] };
    res.throwErrorIfNotSorted();

    return res;
  },

  pseudoClass(value) {
    const res = { ...this, res: [...this.res || [], { type: 'pseudo-class', value }] };
    res.throwErrorIfNotSorted();

    return res;
  },

  pseudoElement(value) {
    if (this.res && this.res.filter((val) => val.type === 'pseudo-element').length !== 0) {
      throw new Error(TWICE_ERROR);
    }

    const res = { ...this, res: [...this.res || [], { type: 'pseudo-element', value }] };
    res.throwErrorIfNotSorted();

    return res;
  },

  combine(selector1, combinator, selector2) {
    return { ...this, res: [...selector1.res || [], { type: 'combinator', value: combinator }, ...selector2.res || []] };
  },

  stringify() {
    return (this.res || []).reduce((accumutator, obj) => {
      const formatSelector = {
        id: `#${obj.value}`,
        class: `.${obj.value}`,
        attribute: `[${obj.value}]`,
        'pseudo-class': `:${obj.value}`,
        'pseudo-element': `::${obj.value}`,
        combinator: ` ${obj.value} `,
        default: `${obj.value}`,
      };
      return accumutator + (formatSelector[obj.type] || formatSelector.default);
    }, '');
  },

  throwErrorIfNotSorted() {
    const order = ['element', 'id', 'class', 'attribute', 'pseudo-class', 'pseudo-element'];

    const isSorted = (this.res || []).every((value, index, array) => !index
      || order.indexOf(array[index - 1].type) <= order.indexOf(value.type));

    if (!isSorted) {
      // throw new Error(CSS_SELECTOR_NOT_SORTED_ERROR);
      throw new Error(NOT_SO_ERROR);
    }
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
