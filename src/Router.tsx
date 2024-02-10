import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Index";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlboalStyles from "./style/GlobalStyles";
import Footer from "./Footer";
import GameDetail from "./game/GameDetail";
import { Game } from "./game/Game";
import { Store } from "./store/Store";
import StoreDetail from "./store/StoreDetail";
import { Platform } from "./platform/Platform";
import PlatformDetail from "./platform/PlatformDetail";
import { Genre } from "./genre/Genre";
import GenreDetail from "./genre/GenreDetail";
import { Publisher } from "./publisher/Publisher";
import PublisherDetail from "./publisher/PublisherDetail";

export default function Router() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlboalStyles />
        <Header />
        <Routes>
          <Route path="/" index element={<Index />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<StoreDetail />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/:id" element={<PlatformDetail />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/genre/:id" element={<GenreDetail />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/publisher/:id" element={<PublisherDetail />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
