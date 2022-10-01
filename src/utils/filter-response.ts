// Remove null key-value pairs from accounts response object
export const cleanEmpty = (obj) => {
  if (Array.isArray(obj)) {
    return obj
      .map((v) => (v && typeof v === 'object' ? cleanEmpty(v) : v))
      .filter((v) => !(v == null));
  } else {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && typeof v === 'object' ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});
  }
};
