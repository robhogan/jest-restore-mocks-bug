/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall react_native
 */

jest.useFakeTimers({ legacyFakeTimers: true });

  describe('Mock fn called after delay', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });
  
    it('calls the function after a delay, and not before', () => {
      const delayedFn = jest.fn();
  
      setTimeout(() => {
        delayedFn();
      }, 500);
  
      jest.advanceTimersByTime(499);
      expect(delayedFn).not.toBeCalled();
  
      jest.advanceTimersByTime(1);
      expect(delayedFn).toBeCalled();
    });
  });
  