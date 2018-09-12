export default function formFieldValues(form) {
  return Array.prototype.reduce.call(form.elements, (acc, el) => {
    if (!el.name) return acc

    return {
      ...acc,
      [el.name]: el.type === 'number' ? +el.value : el.value
    }
  }, {})
}
