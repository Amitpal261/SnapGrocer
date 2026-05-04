import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart.js";
import { AllData } from "../../json/AllData.js";
import { Provider } from "react-redux";
import appStore from "../../Utility/store.js";
import { MemoryRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(AllData),
  })
);

it("check all card", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>
  );

  const buttons = await screen.findAllByRole("button", {
    name: /add to cart/i,
  });

  expect(buttons.length).toBeGreaterThan(0);
});

it("check length of all card", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>
  );

  const cards = await screen.findAllByRole("button", {
    name: /add to cart/i,
  });

  expect(cards).toHaveLength(30);
});

it("sghould show only filter cards", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>
  );

  const cards = await screen.findAllByRole("button", {
    name: /add to cart/i,
  });

  expect(cards).toHaveLength(30);
});