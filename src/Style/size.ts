export function hw(hw: string) {
  return `
    min-height: ${hw};
    height: ${hw};
    max-height: ${hw};

    min-width: ${hw};
    width: ${hw};
    max-width: ${hw};
  `;
}

export function h(h: string) {
  return `
    min-height: ${h};
    height: ${h};
    max-height: ${h};
  `;
}

export function w(w: string) {
  return `
    min-width: ${w};
    width: ${w};
    max-width: ${w};
  `;
}

export function fullScreen() {
  return `
    ${h("100vh")}
    ${w("100vw")}
  `;
}
