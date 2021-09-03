/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import ContentSection from './ContentSection';

describe('Selected state of temperature butttons', () => {
  let actualContent
  let fahrenheitButton
  let celciusButton

  beforeEach(() => {
    actualContent = shallow(
      <ContentSection />
    );
    fahrenheitButton = actualContent.find('[data-id="F"]');
    celciusButton = actualContent.find('[data-id="C"]');
  });
  
  it('is on Celcius at load', () => {
    // assert
    expect(celciusButton).toHaveClass("section__temperature__button--selected");
    expect(fahrenheitButton).toHaveClass("section__temperature__button--unselected");
  });

  it('switches to Fahrenheit if the F buton is clicked', () => {
    // act
    fahrenheitButton.simulate('click');

    // assert
    expect(fahrenheitButton.onClick).toHaveBeenCalledTimes(1);
    expect(fahrenheitButton).toHaveClass("section__temperature__button--selected");
    expect(celciusButton).toHaveClass("section__temperature__button--unselected");
  });

  it('switches back to Celcius if the C buton is clicked', () => {
    // setup
    fahrenheitButton.simulate('click');

    // act
    celciusButton.simulate('click');

    // assert
    expect(fahrenheitButton).toHaveClass("section__temperature__button--unselected");
    expect(celciusButton).toHaveClass("section__temperature__button--selected");
  });
});