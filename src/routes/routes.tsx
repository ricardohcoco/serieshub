import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageDefault from "../pages/PageDefault";
import SerieDetails from "../pages/SerieDetails";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageDefault />}>
                    <Route index element={<HomePage />} />
                    <Route path="/serie/:id" element={<SerieDetails />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}