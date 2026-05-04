
import { render, screen ,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Header from "../Header.js";
import appStore from "../../Utility/store.js";
import { BrowserRouter } from "react-router-dom";

test("should check working or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbtn = screen.getByRole("button", { name: /login/i });
   fireEvent.click(loginbtn);
  const logoutbtn = screen.getByText(/Logout/i);
  // console.log("this is button :", logoutbtn);

  expect(logoutbtn).toBeInTheDocument();
});


test("checking cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const abc = screen.getByText("Cart");

//   console.log("this is button :", abc);

  expect(abc).toBeInTheDocument();
});


test("checking cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const abc = screen.getByText(/Cart/);

//   console.log("this is button :", abc);

  expect(abc).toBeInTheDocument();
});