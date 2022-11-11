import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import freePaintReducer from "_redux/free-paint/freePaintReducer";
import { setDisplay } from "_redux/free-paint/freePaintActions";

import renderWithProvider from "_testUtils/renderWithProvider";

import Stencil from "./Stencil";

describe('Stencil component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Stencil />);
  });

  it('matches snapshot', () => {
    const store = configureStore({
      reducer: { freePaint: freePaintReducer }
    })
    store.dispatch(setDisplay('A'));
    const { asFragment } = renderWithProvider(<Stencil />, { store });
    expect(asFragment()).toMatchSnapshot();
  });
});