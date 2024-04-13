import "./App.css";
import CheckoutStepper from "./components/CheckoutStepper";

const STEPS_DATA = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details</div>,
  },

  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address</div>,
  },
  {
    name: "Payments",
    Component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered</div>,
  },
];

function App() {
  return (
    <div>
      <h1>Hello what are you doing</h1>
      <CheckoutStepper steperData={STEPS_DATA} />
    </div>
  );
}

export default App;
