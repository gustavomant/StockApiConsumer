import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import StockDetails from "../pages/StockDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/stock/:symbol",
        element: <StockDetails />
    }
]);

export default router;