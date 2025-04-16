/**
 * Returns a blob URL for a script that runs the given function immediately (IIFE)
 * @param {Function} fn
 * @returns {string}
 */
export function functionToIIFEBlobSrc(fn) {
  const script = new Blob([`(${fn})()`], {
    type: 'application/javascript',
  });

  return URL.createObjectURL(script);
}
