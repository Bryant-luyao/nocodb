export function parseMetaProp(model: any, propName = 'meta'): any {
  if (!model) return;

  // parse meta property
  try {
    return typeof model[propName] === 'string'
      ? JSON.parse(model[propName])
      : model[propName];
  } catch {
    return {};
  }
}

export function stringifyMetaProp(model: any, propName = 'meta'): string {
  if (!model) return null;

  // stringify meta property
  try {
    return typeof model[propName] === 'string'
      ? model[propName]
      : JSON.stringify(model[propName]);
  } catch (e) {
    return '{}';
  }
}

export function prepareForDb(model: any) {
  if (!model) return model;

  if (model.meta) {
    model.meta = stringifyMetaProp(model);
  }

  return model;
}

export function prepareForResponse(model: any) {
  if (!model) return model;

  if (model.meta) {
    model.meta = parseMetaProp(model);
  }

  return model;
}
