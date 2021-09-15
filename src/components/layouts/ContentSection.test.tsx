/* eslint-env jest */
import { render, RenderResult, screen } from '@testing-library/react';
import React from 'react';
import ContentSection from './ContentSection';
import Root from '../../root/Root'

describe('Selected state of temperature butttons', () => {
  let actualContent: RenderResult
  let fahrenheitButton: HTMLElement
  let celciusButton: HTMLElement

  beforeEach(() => {
    render(
      <Root>
        <ContentSection />
      </Root>
    );
    fahrenheitButton = screen.getByTestId('F');
    celciusButton = screen.getByTestId('C');
  });

  it('renders App component', () => {
    screen.debug();
  });

  
  it('is on Celcius at load', () => {
    // assert
    expect(celciusButton).toHaveClass("section__temperature__button--selected");
    expect(fahrenheitButton).toHaveClass("section__temperature__button--unselected");
  });

  // it('switches to Fahrenheit if the F buton is clicked', () => {
    // act
    // fahrenheitButton.simulate('click');

  //   // assert
  //   expect(fahrenheitButton).toHaveClass("section__temperature__button--selected");
  //   expect(celciusButton).toHaveClass("section__temperature__button--unselected");
  // });

  // it('switches back to Celcius if the C buton is clicked', () => {
  //   // setup
  //   fahrenheitButton.simulate('click');

  //   // act
  //   celciusButton.simulate('click');

  //   // assert
  //   expect(fahrenheitButton).toHaveClass("section__temperature__button--unselected");
  //   expect(celciusButton).toHaveClass("section__temperature__button--selected");
  // });
});