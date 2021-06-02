import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { Home } from '../../screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-navigation/native', () => ({
  useFocusEffect: jest.fn((callback) => callback())
}))

describe('Home', () => {
  it('should be able to get data on async storage', async () => {
    const spyGetItem = jest.spyOn(AsyncStorage, 'getItem')
      .mockReturnValueOnce(
        Promise.resolve(
          JSON.stringify([
            {
              id: '0',
              title: 'Rocketseat',
              email: 'johndoe@example.com',
              password: '123456'
            }
          ])
        )
      )

    const { findByText } = render(
      <Home />
    );

    expect(await findByText('johndoe@example.com')).toBeTruthy()

    expect(spyGetItem).toHaveBeenCalledWith('@passmanager:logins');
  });

  it('should be able to show message when list is empty', async () => {
    jest.spyOn(AsyncStorage, 'getItem')
      .mockReturnValueOnce(Promise.resolve(null));

    const { findByText } = render(
      <Home />
    );

    expect(await findByText('Nenhum item a ser mostrado')).toBeTruthy()
  });
})