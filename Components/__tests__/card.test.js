import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../Utility/store";
import Card from "../Cart.js";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        recipes: [
          { id: 1, name: "Classic Margarita Pizza" },
        ],
      }),
  })
);

test("it should check card is rendering or not", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    </Provider>
  );

  const cartName = await screen.findByText(/margarita/i);

  expect(cartName).toBeInTheDocument();
});