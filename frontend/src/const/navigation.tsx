import AddCustomer from "component/screens/AddCustomer";
import CustomerTable from "component/screens/CustomerTable";
import NotFound from "component/screens/NotFound";
import WelcomeScreen from "component/screens/WelcomeScreen";

export const routes = [
  {
    path: "/",
    element: <WelcomeScreen />,
    errorElement: <NotFound />,
  },
  {
    path: "/add-customer",
    element: <AddCustomer />,
  },
  {
    path: "/customer-table",
    element: <CustomerTable />,
  },
];
