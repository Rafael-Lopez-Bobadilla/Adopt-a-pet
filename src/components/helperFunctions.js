export const expandContainer = (containerSelector, input) => {
  const space = document.body.offsetHeight - (window.scrollY + input.current.getBoundingClientRect().bottom)
  if (space < 370) {
    document.querySelector(`${containerSelector}`).style.paddingBottom = `370px`
  }
}

export const shrinkContainer = (containerSelector, originalPadding) => {
  document.querySelector(`${containerSelector}`).style.paddingBottom = `${originalPadding}`
}