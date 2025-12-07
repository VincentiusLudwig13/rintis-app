type Palette = Record<string, any>;

export const createCssVars = (
  palette: Palette,
  prefix = ''
): Record<string, string> => {
  const vars: Record<string, string> = {};

  const walk = (obj: any, path: string[] = []) => {
    Object.entries(obj).forEach(([key, value]) => {
      const newPath = [...path, key];

      if (typeof value === 'string') {
        const cssVarName = `--${prefix}${newPath.join('-')}`;
        vars[cssVarName] = value;
      } else if (typeof value === 'object' && value !== null) {
        walk(value, newPath);
      }
    });
  };

  walk(palette);

  return vars;
};
