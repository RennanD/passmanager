import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { RegisterLoginData } from '../../screens/RegisterLoginData';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('react-native-uuid', () => {
  return {
    v4: () => {
      return 'new-item'
    }
  }
})

describe('RegisterLoginData', () => {
  it('should be able to save login data on async storage', async () => {
    const spySetItem = jest.spyOn(AsyncStorage, 'setItem')
      .mockImplementationOnce((key: string, data: any) => Promise.resolve());

    const spyGetItem = jest.spyOn(AsyncStorage, 'getItem')
      .mockReturnValueOnce(
        Promise.resolve(
          JSON.stringify([
            {
              id: '0',
              title: 'LikedIn',
              email: 'johndoelinkedin@example.com',
              password: '123456'
            }
          ])
        )
      )

    const { getByPlaceholderText, getByText, findByPlaceholderText } = render(
      <RegisterLoginData />
    );

    const titleInput = getByPlaceholderText("Escreva o título aqui");
    const emailInput = getByPlaceholderText("Escreva o Email aqui");
    const passwordInput = getByPlaceholderText("Escreva a senha aqui");
    const submitButton = getByText("Salvar");

    fireEvent.changeText(titleInput, 'Rocketseat');
    fireEvent.changeText(emailInput, 'johndoe@example.com');
    fireEvent.changeText(passwordInput, '123456');
    fireEvent.press(submitButton);

    expect(await findByPlaceholderText("Escreva o título aqui")).toBeEmpty();
    expect(emailInput).toBeEmpty();
    expect(passwordInput).toBeEmpty();

    expect(spySetItem).toHaveBeenCalledWith(
      '@passmanager:logins',
      JSON.stringify([
        {
          id: '0',
          title: 'LikedIn',
          email: 'johndoelinkedin@example.com',
          password: '123456'
        },
        {
          id: 'new-item',
          title: 'Rocketseat',
          email: 'johndoe@example.com',
          password: '123456'
        }
      ])
    );

    expect(spyGetItem).toHaveBeenCalledWith('@passmanager:logins');
  });

  it('should be able to show errors message on data validation', async () => {
    const { getByPlaceholderText, getByText, findByText } = render(
      <RegisterLoginData />
    );

    const titleInput = getByPlaceholderText("Escreva o título aqui");
    const emailInput = getByPlaceholderText("Escreva o Email aqui");
    const passwordInput = getByPlaceholderText("Escreva a senha aqui");
    const submitButton = getByText("Salvar");

    fireEvent.changeText(titleInput, '');
    fireEvent.changeText(emailInput, '');
    fireEvent.changeText(passwordInput, '');
    fireEvent.press(submitButton);

    await findByText('Título é obrigatório!')
    getByText('Email é obrigatório!')
    getByText('Senha é obrigatória!')
  });
})