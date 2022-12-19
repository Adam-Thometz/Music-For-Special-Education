import React from "react";
import { instrumentIdColors } from "_data/_report-cards/colorsForProgressBar";

import renderWithProvider from "_testUtils/renderWithProvider";

import Score from "./Score";

describe('Score component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Score name='COOL FACTOR' score={2} maxScore={4} colorPalette={instrumentIdColors} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Score name='COOL FACTOR' score={2} maxScore={4} colorPalette={instrumentIdColors} />);
    expect(asFragment()).toMatchSnapshot();
  });
});