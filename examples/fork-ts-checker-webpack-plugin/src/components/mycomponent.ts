import { exportedFunction } from './myfunction';

/**
 * Here is a functional component, that uses the return value
 * of function from another module, as one of its defaultProps values.
 */
export function MyComponent(): any {
  return null;
}
MyComponent.defaultProps = {
  /**
   * Comment out this line, and it will compile successfully.
   */
  myProp: exportedFunction(),
};
