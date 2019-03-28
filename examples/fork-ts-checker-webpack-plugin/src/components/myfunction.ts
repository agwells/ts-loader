interface NotExportedInterface {}

/**
 * Here is a function exported from a module, and using a non-exported
 * interface as its return type
 */
export function exportedFunction(): NotExportedInterface {
  return {};
}
