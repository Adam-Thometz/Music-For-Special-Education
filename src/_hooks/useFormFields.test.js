import useFormFields from "./useFormFields";
import { act, renderHook } from "@testing-library/react-hooks";

describe('useFormFields hook', () => {
  const testInitValue = { testInput: 'hello' };
  
  it('returns the initial value', () => {
    const { result } = renderHook(() => useFormFields(testInitValue));
    expect(result.current[0]).toEqual(testInitValue);
  });
  
  it('handles changing the value', () => {
    const { result } = renderHook(() => useFormFields(testInitValue));
    act(() => {
      const setForm = result.current[1];
      setForm({ target: { name: 'testInput', value: 'goodbye' } });
    });
    expect(result.current[0]).toEqual({ testInput: 'goodbye' });
  });
  
  it('handles resetting the form', () => {
    const { result } = renderHook(() => useFormFields(testInitValue));
    act(() => {
      const setForm = result.current[1];
      setForm({ target: { name: 'testInput', value: 'goodbye' } });
    });
    expect(result.current[0]).toEqual({ testInput: 'goodbye' });
    act(() => {
      const resetForm = result.current[2];
      resetForm();
    });
    expect(result.current[0]).toEqual(testInitValue);
  })
});